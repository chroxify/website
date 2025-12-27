"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Numa } from "./projects/numa";
import { Haptic } from "./projects/haptic";
import { TinyQRC } from "./projects/tinyqrc";

const tabs = [
  {
    label: "Projects",
    icon: "IconFolder1" as const,
    value: "projects" as const,
    iconClassName: "size-[19px]",
  },
  {
    label: "Components",
    icon: "IconComponents" as const,
    value: "components" as const,
  },
  {
    label: "Writing",
    icon: "IconSquareLines" as const,
    value: "writing" as const,
    iconClassName: "size-[18px]",
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState<
    "projects" | "components" | "writing"
  >("projects");

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-2 items-center w-full">
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            variant="tab"
            data-active={activeTab === tab.value}
            icon={tab.icon}
            iconClassName={tab.iconClassName}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 w-full">
        {activeTab === "projects" && <ProjectList />}
        {activeTab === "components" && <div>Components</div>}
        {activeTab === "writing" && <div>Writing</div>}
      </div>
    </div>
  );
}

function ProjectList() {
  return (
    <div className="flex flex-col gap-2 w-[calc(100%+40px)] -mx-4">
      <Numa />
      <Haptic />
      <TinyQRC />
    </div>
  );
}
