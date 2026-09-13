function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

type ResolvedImage = {
  displaySrc: string;
  fullSrc: string;
};

type ImageResolver = (src: string) => ResolvedImage | undefined;

const GALLERY_OPEN_RE =
  /<div\s+class=["'](?:full-bleed-gallery|inline-gallery)["'][^>]*>/gi;

function findMatchingDivEnd(html: string, openEndIndex: number): number {
  let depth = 1;
  let i = openEndIndex;

  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);

    if (nextClose === -1) return -1;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
      continue;
    }

    depth -= 1;
    i = nextClose + 6;
    if (depth === 0) return i;
  }

  return -1;
}

function formatInline(text: string): string {
  return escapeHtml(text).replaceAll(
    /\*\*([^*]+)\*\*/g,
    '<strong>$1</strong>',
  );
}

function renderBlockquote(block: string): string {
  const text = block
    .split('\n')
    .map((line) => line.replace(/^>\s?/, '').trim())
    .filter(Boolean)
    .join(' ');

  return `<blockquote class="pull-quote"><p>${formatInline(text)}</p></blockquote>`;
}

function renderExpandButton(fullSrc: string, expandIcon: string): string {
  return `<button type="button" class="case-study__gallery-expand" data-full-src="${escapeHtml(fullSrc)}" aria-label="Expand image"><span class="case-study__gallery-expand-icon">${expandIcon}</span></button>`;
}

function renderImage(
  block: string,
  resolveImage?: ImageResolver,
  expandIcon?: string,
): string {
  const match = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
  if (!match) return '';

  const [, alt, src] = match;
  const resolved = resolveImage?.(src);

  if (!resolved) {
    const fileName = src.split('/').pop() ?? src;
    return `<div class="image-placeholder" role="img" aria-label="${escapeHtml(alt)}"><span class="image-placeholder__label">${escapeHtml(fileName)}</span></div>`;
  }

  const expand =
    expandIcon && resolved.fullSrc
      ? renderExpandButton(resolved.fullSrc, expandIcon)
      : '';

  return `<figure class="long-form__figure case-study__gallery-item" data-full-src="${escapeHtml(resolved.fullSrc)}"><img src="${escapeHtml(resolved.displaySrc)}" alt="${escapeHtml(alt)}" loading="lazy" />${expand}</figure>`;
}

function renderLabel(block: string): string {
  const match = block.trim().match(/^\*\*([^*]+)\*\*$/);
  if (!match) return '';
  return `<p class="long-form__label"><strong>${escapeHtml(match[1])}</strong></p>`;
}

function renderParagraph(block: string): string {
  const lines = block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length > 1 && isLabel(lines[0])) {
    const labelMatch = lines[0].match(/^\*\*([^*]+)\*\*$/);
    const label = labelMatch
      ? `<p class="long-form__label"><strong>${escapeHtml(labelMatch[1])}</strong></p>`
      : '';
    const body = `<p>${formatInline(lines.slice(1).join(' '))}</p>`;
    return `${label}${body}`;
  }

  return `<p>${formatInline(lines.join(' '))}</p>`;
}

function isBlockquote(block: string): boolean {
  return block
    .split('\n')
    .every((line) => line.trim() === '' || line.startsWith('>'));
}

function isImage(block: string): boolean {
  return /^!\[[^\]]*\]\([^)]+\)$/.test(block.trim());
}

function isLabel(block: string): boolean {
  return /^\*\*[^*]+\*\*$/.test(block.trim());
}

function resolveHtmlImageSrcs(
  html: string,
  resolveImage?: ImageResolver,
  expandIcon?: string,
): string {
  return html.replace(/<img\b([^>]*)\/?>/gi, (_match, attrs: string) => {
    const srcMatch = attrs.match(/\ssrc=["']([^"']+)["']/i) ?? attrs.match(/^src=["']([^"']+)["']/i);
    if (!srcMatch) return _match;

    const src = srcMatch[1];
    const resolved = resolveImage?.(src);
    if (!resolved) {
      const fileName = src.split('/').pop() ?? src;
      return `<div class="image-placeholder" role="img" aria-label="${escapeHtml(fileName)}"><span class="image-placeholder__label">${escapeHtml(fileName)}</span></div>`;
    }

    const cleanedAttrs = attrs
      .replace(/\ssrc=["'][^"']+["']/i, '')
      .replace(/^src=["'][^"']+["']/i, '')
      .replace(/\s*\//, '')
      .trim();

    const expand =
      expandIcon && resolved.fullSrc
        ? renderExpandButton(resolved.fullSrc, expandIcon)
        : '';

    return `<div class="gallery__media case-study__gallery-item" data-full-src="${escapeHtml(resolved.fullSrc)}"><img src="${escapeHtml(resolved.displaySrc)}" ${cleanedAttrs} loading="lazy" />${expand}</div>`;
  });
}

function extractGalleries(content: string): {
  content: string;
  galleries: string[];
} {
  const galleries: string[] = [];
  let nextContent = '';
  let cursor = 0;

  GALLERY_OPEN_RE.lastIndex = 0;
  let openMatch = GALLERY_OPEN_RE.exec(content);

  while (openMatch) {
    const openStart = openMatch.index;
    const openEnd = openStart + openMatch[0].length;
    const closeEnd = findMatchingDivEnd(content, openEnd);

    if (closeEnd === -1) break;

    nextContent += content.slice(cursor, openStart);
    const index = galleries.length;
    galleries.push(content.slice(openStart, closeEnd));
    nextContent += `\n\n@@GALLERY_${index}@@\n\n`;
    cursor = closeEnd;

    GALLERY_OPEN_RE.lastIndex = cursor;
    openMatch = GALLERY_OPEN_RE.exec(content);
  }

  nextContent += content.slice(cursor);
  return { content: nextContent, galleries };
}

export function renderMarkdownToHtml(
  content: string,
  resolveImage?: ImageResolver,
  expandIcon?: string,
): string {
  const { content: withPlaceholders, galleries } = extractGalleries(content);

  return withPlaceholders
    .trim()
    .split(/\n\n+/)
    .filter(Boolean)
    .map((block) => {
      const galleryMatch = block.trim().match(/^@@GALLERY_(\d+)@@$/);
      if (galleryMatch) {
        const galleryHtml = galleries[Number(galleryMatch[1])] ?? '';
        return resolveHtmlImageSrcs(galleryHtml, resolveImage, expandIcon);
      }

      if (isBlockquote(block)) return renderBlockquote(block);
      if (isImage(block)) return renderImage(block, resolveImage, expandIcon);
      if (isLabel(block)) return renderLabel(block);
      return renderParagraph(block);
    })
    .join('');
}
