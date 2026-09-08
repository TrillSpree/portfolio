import { getCollection, type CollectionEntry } from 'astro:content';

export function isWorkPublished(entry: CollectionEntry<'work'>): boolean {
  const { gallery, problem, explorations, solution, opportunity, takeaway } =
    entry.data;

  return Boolean(
    gallery?.length ||
      problem ||
      explorations ||
      solution ||
      opportunity ||
      takeaway,
  );
}

export function shouldShowAllWork(): boolean {
  return import.meta.env.DEV;
}

export async function getPublishedWork(): Promise<CollectionEntry<'work'>[]> {
  const work = await getCollection('work');

  if (shouldShowAllWork()) {
    return work;
  }

  return work.filter(isWorkPublished);
}
