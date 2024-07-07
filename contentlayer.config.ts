// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Craft = defineDocumentType(() => ({
  name: "Craft",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (craft) => `/crafts/${craft._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/crafts",
  documentTypes: [Craft],
});
