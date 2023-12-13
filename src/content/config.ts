import { z, defineCollection } from 'astro:content';

const programsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            subtitle: z.string(),
            pubDate: z.date(),
            dates: z.string(),
            time: z.string(),
            location: z.string(),
            image: z.object({
                url: image(),
                alt: z.string(),
            }),
            tags: z.array(
                z.enum(['Course', 'Working Group', 'Event', 'Workshop'])
            ),
            featured: z.boolean().optional(),
        }),
});

const resourcesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            author: z.string(),
            type: z.string(),
            year: z.number(),
            image: z.object({
                url: image(),
                alt: z.string(),
            }),
            dateAdded: z.date(),
        }),
});

export const collections = {
    programs: programsCollection,
    resources: resourcesCollection,
};
