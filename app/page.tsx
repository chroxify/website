import Experience from "@/components/experience";
import Project from "@/components/project";
import { Section } from "@/components/section";
import { allCrafts } from "content-collections";
import { Experiment } from "@/components/experiment";
import Social from "@/components/social";

export default function Home() {
  return (
    <>
      {/* About */}
      <p className="space-y-4">
        <span className="block relative">
          I am a designer & developer based in Berlin, Germany.
        </span>

        <span className="block">
          Currently, I work as a design engineer at{" "}
          <a
            href="https://superwall.com"
            className="underline underline-offset-2 decoration-foreground/30 font-medium hover:opacity-70 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superwall
          </a>{" "}
          where I focus on delivering polished user interfaces and creating
          exceptional user experiences.
        </span>

        <span className="block">
          Outside of work, I enjoy learning new skills, skiing and building
          (mostly open source) software.
        </span>
      </p>

      {/* Experience */}
      <Section title="Experience">
        <Experience
          name="Superwall"
          href="https://superwall.com"
          period={{ start: "2024", end: "Present" }}
          description="Designing & developing features for the dashboard and paywalls."
        />

        <Experience
          name="Freelance & Open Source"
          period={{ start: "2022", end: "Present" }}
          description="Various client projects, open-source contributions, and side projects."
        />
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <Project
          name="Haptic"
          href="https://haptic.md"
          year={2024}
          description="Open source, local-first markdown note-taking app."
        />
        <Project
          name="Feedbase"
          href="https://feedbase.app"
          year={2023}
          description="A tool for collection feedback, sharing roadmaps, changelogs, and more."
        />
        <Project
          name="OTP Inbox"
          href="https://raycast.com/chroxify/otp-inbox"
          year={2024}
          description="Raycast extension to easily view and copy email verification codes."
        />
        <Project
          name="Supafork"
          href="https://supafork.chroxify.com"
          year={2023}
          description={
            <>
              Supafork is Vercel's one-click deploy button for Supabase
              databases. It won{" "}
              <a
                href="https://supabase.com/blog/launch-week-x-hackathon-winners#best-overall-project"
                className="underline underline-offset-2 decoration-foreground/30 hover:opacity-70 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Best Overall Project
              </a>{" "}
              at the Launch Week X Hackathon.
            </>
          }
        />
        <Project
          name="NameGPT"
          href="https://namegpt.chroxify.com"
          year={2023}
          description="A simple tool to generate names based on your project description."
        />
        <Project
          name="Sherlock Web"
          href="https://github.com/chroxify/sherlock-web"
          year={2021}
          description="Web interface for the Sherlock CLI tool."
        />
      </Section>

      {/* Experiments */}
      <Section title="Experiments">
        <div className="relative w-full md:h-[150px] mt-4">
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-wrap md:flex-nowrap justify-center md:gap-0! gap-4 md:-space-x-4">
            {allCrafts.map((craft, index) => (
              <Experiment
                key={craft.slug}
                index={index}
                image={`/crafts/${craft.slug}.png`}
                path={`/crafts/${craft.slug}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section
        title="Contact"
        className="flex flex-row items-center justify-start gap-2"
      >
        <Social name="Mail" url="mailto:chroxify@gmail.com" />
        <Social name="Twitter" url="https://twitter.com/chroxify" />
        <Social name="GitHub" url="https://github.com/chroxify" />
        <Social name="LinkedIn" url="https://linkedin.com/in/chroxify" />
      </Section>
    </>
  );
}
