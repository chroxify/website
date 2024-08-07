import { cn } from "@/lib/utils";
import { Newsreader } from "next/font/google";
import ContentLink from "@/components/content-link";
import Social from "@/components/social";
import { allCrafts } from "@/.contentlayer/generated";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const PROJECTS = [
  {
    name: "Haptic",
    url: "https://github.com/chroxify/haptic",
    description: "Open source markdown editor.",
    year: "2024",
  },
  {
    name: "Feedbase",
    url: "https://feedbase.app",
    description: "Collect feedback & announce product updates.",
    year: "2023",
  },
  {
    name: "Supafork",
    url: "https://supafork.com",
    description: "Fork supabase projects in a click.",
    year: "2023",
  },
  {
    name: "Namegpt",
    url: "https://github.com/chroxify/namegpt",
    description: "Let AI name your next project.",
    year: "2023",
  },
  {
    name: "Sherlock Web",
    url: "https://github.com/chroxify/sherlock-web",
    description: "Search for usernames across social networks.",
    year: "2021",
  },
];

export default function Home() {
  return (
    <>
      {/* About */}
      <div className="space-y-2 w-full animate-enter delay-75">
        <h2 className={cn(newsreader.className, "text-secondary-foreground")}>
          About me
        </h2>
        <p>
          Building things on the web since 2019. I&apos;m especially passionate
          about well executed design, attention to detail, and the intersection
          of code and art.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-2 w-full animate-enter delay-100">
        <h2 className={cn(newsreader.className, "text-secondary-foreground")}>
          Projects
        </h2>

        <ul className="space-y-2 w-full">
          {PROJECTS.map((project) => (
            <ContentLink
              key={project.name}
              name={project.name}
              url={project.url}
              description={project.description}
              year={project.year}
            />
          ))}
        </ul>
      </div>

      {/* Crafts */}
      <div className="space-y-2 w-full animate-enter delay-125">
        <h2 className={cn(newsreader.className, "text-secondary-foreground")}>
          Crafts
        </h2>
        <ul className="space-y-2 w-full">
          {allCrafts
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((craft) => (
              <ContentLink
                key={craft._raw.flattenedPath}
                name={craft.title}
                url={`/crafts/${craft._raw.flattenedPath}`}
                description={craft.description}
                keepTab
              />
            ))}
        </ul>
      </div>

      {/* Socials */}
      <div className="space-y-2 w-full animate-enter delay-150">
        <h2 className={cn(newsreader.className, "text-secondary-foreground")}>
          Socials
        </h2>
        <div className="flex items-center justify-start gap-2">
          <Social name="Mail" url="mailto:chroxify@gmail.com" />
          <Social name="Twitter" url="https://twitter.com/chroxify" />
          <Social name="GitHub" url="https://github.com/chroxify" />
          <Social name="LinkedIn" url="https://linkedin.com/in/chroxify" />
        </div>
      </div>
    </>
  );
}
