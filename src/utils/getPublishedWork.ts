import { getCollection, type CollectionEntry } from 'astro:content';

export function isWorkPublished(entry: CollectionEntry<'work'>): boolean {
  return Boolean(entry.data.gallery?.length);
}

export function shouldShowAllWork(): boolean {
  return import.meta.env.DEV && process.env.SHOW_ALL_WORK === 'true';
}

export async function getPublishedWork(): Promise<CollectionEntry<'work'>[]> {
  const work = await getCollection('work');

  if (shouldShowAllWork()) {
    return work;
  }

  return work.filter(isWorkPublished);
}
