import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each src/content/posts/<slug>/index.md becomes /blog/<slug>/.
const blog = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().max(80),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		tags: z
			// Tags are URL segments (/blog/tags/<tag>/), so only slugs are allowed.
			.array(
				z
					.string()
					.trim()
					.toLowerCase()
					.regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Use a slug tag, e.g. ai-agents'),
			)
			.default([])
			.transform((tags) => [...new Set(tags)]),
		// Drafts show on the dev server only; they are never built or published.
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
