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

export function renderMarkdownToHtml(
  content: string,
  resolveImage?: ImageResolver,
  expandIcon?: string,
): string {
  return content
    .trim()
    .split(/\n\n+/)
    .filter(Boolean)
    .map((block) => {
      if (isBlockquote(block)) return renderBlockquote(block);
      if (isImage(block)) return renderImage(block, resolveImage, expandIcon);
      if (isLabel(block)) return renderLabel(block);
      return renderParagraph(block);
    })
    .join('');
}
