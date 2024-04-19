import { allExperiments } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }: any) => <Link href={href as string}>{children}</Link>,
  // Add a custom component.
  MyComponent: () => <div>Hello World!</div>,
};

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the experiment for the current page.
  const experiment = allExperiments.find(
    (experiment) => experiment._raw.flattenedPath === params.slug
  );

  // 404 if the experiment does not exist.
  if (!experiment) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(experiment.body.code);

  return (
    <div className="flex flex-col gap-10">
      <div className="w-full">
        <h1>{experiment.title}</h1>
        <p className="text-muted-foreground text-sm">
          {new Date(experiment.date).toLocaleDateString()}
        </p>
      </div>
      <MDXContent components={mdxComponents} />{" "}
    </div>
  );
}
