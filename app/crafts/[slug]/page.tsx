import { allCrafts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import DynamicInputLabel from "@/components/experiments/dynamic-label";
import Carousel from "@/components/experiments/carousel";
import Filters from "@/components/experiments/filters";
import Folder from "@/components/experiments/folder";
import Order from "@/components/experiments/order";
import Reaction from "@/components/experiments/reaction";
import Waitlist from "@/components/experiments/waitlist";
import { notFound } from "next/navigation";

export const components = {
  Craft: {
    DynamicInputLabel: DynamicInputLabel,
    Carousel,
    Filters,
    Folder,
    Order,
    QuickReaction: Reaction,
    Waitlist,
  },
};

export default async function CraftPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const craft = allCrafts.find((craft) => craft._meta.path === slug);

  if (!craft?.mdx) {
    return notFound();
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-foreground/30 [&_a:hover]:opacity-70 [&_a]:transition-all">
      <div className="flex flex-col">
        <h2 className="font-medium">{craft.title}</h2>
        <p className="text-muted-foreground">
          {craft.date.toLocaleDateString()}
        </p>
      </div>

      <MDXContent code={craft?.mdx} components={components as any} />
    </div>
  );
}
