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
          Currently, I'm a design engineer at{" "}
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
          description="Superwall is a platform that helps you monetize your content."
        />

        <Experience
          name="Freelance & Open Source"
          period={{ start: "2022", end: "Present" }}
          description="I've worked with a variety of clients, from startups to established companies, to help them build their products."
        />
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <Project
          name="Haptic"
          href="https://haptic.so"
          year={2024}
          description="Haptic is an open source, local-first markdown note taking app."
        />
        <Project
          name="Feedbase"
          href="https://feedbase.app"
          year={2024}
          description="Feedbase is an open source feedback collection tool."
        />
        <Project
          name="OTP Inbox"
          href="https://otp.so"
          year={2024}
          description="OTP Inbox is an open source email inbox."
        />
        <Project
          name="Supafork"
          href="https://supafork.com"
          year={2024}
          description="Supafork is a hackathon project I built making forking supabase databases 1 clicks."
        />
        <Project
          name="NameGPT"
          href="https://namegpt.ai"
          year={2024}
          description="Generate a name for your startup in seconds."
        />
      </Section>

      {/* Experiments */}
      <Section title="Experiments">
        <div className="relative w-full h-[150px] mt-4">
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-row !gap-0 -space-x-4">
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
      <Section title="Contact">
        <div className="flex items-center justify-start gap-2">
          <Social name="Mail" url="mailto:chroxify@gmail.com" />
          <Social name="Twitter" url="https://twitter.com/chroxify" />
          <Social name="GitHub" url="https://github.com/chroxify" />
          <Social name="LinkedIn" url="https://linkedin.com/in/chroxify" />
        </div>
      </Section>
    </>
  );
}
