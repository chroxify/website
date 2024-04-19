// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Experiment = defineDocumentType(() => ({
  name: "Experiment",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (experiment) => `/experiments/${experiment._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/experiments",
  documentTypes: [Experiment],
});
