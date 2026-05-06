import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			/** Use for heroes served from `/public` (avoids content-layer asset resolution) */
			heroImagePublic: z.string().optional(),
			/** Optional meta keywords; falls back to site defaults in layout */
			keywords: z.array(z.string()).optional(),
		}),
});

export const collections = { blog };
