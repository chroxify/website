import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const crafts = defineCollection({
  name: "crafts",
  directory: "content/crafts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [crafts],
});
