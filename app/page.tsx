import { cn } from "@/lib/utils";
import { Newsreader } from "next/font/google";
import Project from "@/components/project";
import Social from "@/components/social";
import Qoute from "@/components/qoute";
import LocalTime from "@/components/time";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full max-w-2xl gap-10">
      {/* Header */}
      <h1 className="font-medium transition-all animate-enter pt-5 sm:pt-24">
        Christo Todorov
        <br />
        <span
          className={cn(
            newsreader.className,
            "font-normal text-secondary-foreground"
          )}
        >
          Crafting code & drawing pixels.
        </span>
      </h1>

      {/* About */}
      <div className="space-y-2 w-full animate-enter delay-75">
        <h2
          className={cn(
            newsreader.className,
            "italic text-secondary-foreground"
          )}
        >
          about me.
        </h2>
        <p>
          Building things on the web since 2019. I&apos;m especially passionate
          about well executed design, attention to detail, and the intersection
          of code and art.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-2 w-full animate-enter delay-100">
        <h2
          className={cn(
            newsreader.className,
            "italic text-secondary-foreground"
          )}
        >
          projects.
        </h2>

        <ul className="space-y-2 w-full">
          <Project
            name="OTP Inbox"
            url="https://www.raycast.com/chroxify/otp-inbox"
            description="Fastest way to fill in email verification codes."
            year="2024"
          />
          <Project
            name="Haptic"
            url="https://github.com/chroxify/haptic"
            description="Open source markdown editor."
            year="2024"
          />
          <Project
            name="Feedbase"
            url="https://feedbase.app"
            description="Collect feedback & announce product updates."
            year="2023"
          />
          <Project
            name="Supafork"
            url="https://supafork.com"
            description="Fork supabase projects in a click."
            year="2023"
          />
          <Project
            name="Namegpt"
            url="https://github.com/chroxify/namegpt"
            description="Let AI name your next project."
            year="2023"
          />
          <Project
            name="Sherlock Web"
            url="https://github.com/chroxify/sherlock-web"
            description="Search for usernames across social networks."
            year="2021"
          />
        </ul>
      </div>

      {/* Socials */}
      <div className="space-y-2 w-full animate-enter delay-150">
        <h2
          className={cn(
            newsreader.className,
            "italic text-secondary-foreground"
          )}
        >
          socials.
        </h2>
        <div className="flex items-center justify-start gap-2">
          <Social name="Mail" url="mailto:chroxify@gmail.com" />
          <Social name="Twitter" url="https://twitter.com/chroxify" />
          <Social name="GitHub" url="https://github.com/chroxify" />
          <Social name="LinkedIn" url="https://linkedin.com/in/chroxify" />
        </div>
      </div>

      {/* Footer */}
      <div className="h-full w-full max-w-2xl justify-between flex items-end animate-enter delay-200 pb-5 sm:pb-24">
        <Qoute />
        <LocalTime />
      </div>
    </div>
  );
}
