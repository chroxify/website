import Carousel from "@/components/crafts/carousel/carousel";
import Filters from "@/components/crafts/filters/filters";
import Folder from "@/components/crafts/folder/folder";
import Order from "@/components/crafts/order/order";
import Waitlist from "@/components/crafts/waitlist/waitlist";
import { allCrafts } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the craft for the current page.
  const craft = allCrafts.find(
    (craft) => craft._raw.flattenedPath === params.slug
  );

  if (!craft) notFound();

  return {
    title: `Christo Todorov | ${craft.title}`,
    openGraph: {
      images: [
        {
          url: `/crafts/${craft._raw.flattenedPath}/opengraph.png`,
        },
      ],
    },
  };
}

// Custom MDX components
const mdxComponents: MDXComponents = {
  a: (
    { href, children }: any // eslint-disable-line
  ) => (
    <Link
      href={href as string}
      className="text-foreground hover:underline transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  ),
  p: (
    { children }: any // eslint-disable-line
  ) => <p className="text-secondary-foreground">{children}</p>,
  Craft: {
    Folder,
    Order,
    Waitlist,
    Filters,
    Carousel,
  },
};

export default async function Page({ params }: Props) {
  // Find the craft for the current page.
  const craft = allCrafts.find(
    (craft) => craft._raw.flattenedPath === params.slug
  );

  // 404 if the craft does not exist.
  if (!craft) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(craft.body.code);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full">
        <h2>{craft.title}</h2>
        <p className="text-muted-foreground text-sm">
          {new Date(craft.date).toLocaleDateString()}
        </p>
      </div>
      <div className="space-y-5 w-full">
        <MDXContent components={mdxComponents} />
      </div>
    </div>
  );
}
