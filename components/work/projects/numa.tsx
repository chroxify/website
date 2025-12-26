"use client";

import { ProjectCard, useProjectHover } from "../project-card";
import { FloatingImage, FloatingIcon, IconShadow } from "../primitives";
import { CentralIcon } from "@/lib/central-icon";

export function Numa() {
  return (
    <ProjectCard
      title="Numa"
      description="A dead-simple nutrition tracker for iOS - focused on simplicity and ease of use."
      href="/project-1"
    >
      <HoverContent />
    </ProjectCard>
  );
}

function HoverContent() {
  const isHovered = useProjectHover();

  return (
    <>
      {/* Images */}
      <FloatingImage
        src="/assets/numa/meal.png"
        alt="Numa"
        fadeFrom="top"
        className="-top-full left-0"
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -8 : 8,
          left: isHovered ? "-30%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      />
      <FloatingImage
        src="/assets/numa/widgets.png"
        alt="Numa"
        fadeFrom="bottom"
        className="right-0"
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -6 : 12,
          right: isHovered ? "-30%" : "0%",
          top: isHovered ? "-175%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      />
      <FloatingImage
        src="/assets/numa/overview.png"
        alt="Numa"
        fadeFrom="bottom"
        className="right-0"
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 12 : -12,
          right: isHovered ? "-45%" : "0%",
          top: isHovered ? "-100%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      />

      {/* Shadow layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <IconShadows isHovered={isHovered} />
      </div>

      {/* Icon layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <Icons isHovered={isHovered} />
      </div>
    </>
  );
}

function IconShadows({ isHovered }: { isHovered: boolean }) {
  const shadows = [
    {
      size: "size-10",
      animate: {
        scale: isHovered ? 1 : 0.35,
        rotate: isHovered ? -4 : -6,
        right: isHovered ? "-53%" : "0%",
        top: isHovered ? "-100%" : "-50%",
        opacity: isHovered ? 1 : 0,
      },
    },
    {
      size: "size-10",
      animate: {
        scale: isHovered ? 1 : 0.35,
        rotate: isHovered ? -6 : 12,
        right: isHovered ? "-50%" : "0%",
        top: isHovered ? "55%" : "-50%",
        opacity: isHovered ? 1 : 0,
      },
    },
    {
      size: "size-11",
      animate: {
        scale: isHovered ? 1 : 0.35,
        rotate: isHovered ? 4 : 12,
        right: isHovered ? "-60%" : "0%",
        top: isHovered ? "-10%" : "-50%",
        opacity: isHovered ? 1 : 0,
      },
    },
    {
      size: "size-11",
      animate: {
        scale: isHovered ? 1 : 0.35,
        rotate: isHovered ? 36 : 12,
        right: isHovered ? "-55%" : "0%",
        top: isHovered ? "150%" : "-50%",
        opacity: isHovered ? 1 : 0,
      },
    },
    {
      size: "size-10",
      animate: {
        scale: isHovered ? 1 : 0.35,
        rotate: isHovered ? -12 : 12,
        right: isHovered ? "-43%" : "0%",
        top: isHovered ? "200%" : "-50%",
        opacity: isHovered ? 1 : 0,
      },
    },
  ];

  return (
    <>
      {shadows.map((shadow, i) => (
        <IconShadow key={i} size={shadow.size} animate={shadow.animate} />
      ))}
    </>
  );
}

function Icons({ isHovered }: { isHovered: boolean }) {
  return (
    <>
      <FloatingIcon
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -4 : -6,
          right: isHovered ? "-53%" : "0%",
          top: isHovered ? "-100%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <rect width="228" height="228" rx="72" fill="#F4E4CF" />
        <path
          d="M119.094 55.2188C110.382 70.2462 112.457 89.8139 125.321 102.678C138.186 115.543 157.753 117.618 172.781 108.905V153.187C172.781 164.009 164.009 172.781 153.187 172.781H74.8125C63.9912 172.781 55.2188 164.009 55.2188 153.187V74.8125C55.2188 63.9912 63.9912 55.2188 74.8125 55.2188H119.094Z"
          fill="#FE930A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M162.424 65.5759C157.323 60.4747 149.052 60.4747 143.951 65.5759C138.849 70.6771 138.849 78.9479 143.951 84.049C149.052 89.1503 157.323 89.1503 162.424 84.049C167.525 78.9479 167.525 70.6771 162.424 65.5759ZM171.66 56.3393C161.458 46.1369 144.917 46.1369 134.714 56.3393C124.512 66.5418 124.512 83.0832 134.714 93.2857C144.917 103.488 161.458 103.488 171.66 93.2857C181.863 83.0832 181.863 66.5418 171.66 56.3393Z"
          fill="#FE930A"
        />
      </FloatingIcon>

      <FloatingIcon
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -6 : 12,
          right: isHovered ? "-50%" : "0%",
          top: isHovered ? "55%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <rect width="228" height="228" rx="72" fill="#D7EBDD" />
        <path
          d="M82.3983 55.2188C78.9553 55.2186 75.9851 55.2186 73.5387 55.4184C70.9566 55.6294 68.3884 56.0952 65.9171 57.3543C62.2303 59.2329 59.2329 62.2303 57.3543 65.9171C56.0952 68.3884 55.6294 70.9566 55.4184 73.5387C55.2186 75.9851 55.2186 78.9553 55.2188 82.3982V87.875C55.2188 91.4821 58.1429 94.4063 61.75 94.4063H100.937C104.545 94.4063 107.469 91.4821 107.469 87.875V61.75C107.469 58.1429 104.545 55.2188 100.937 55.2188H82.3983Z"
          fill="#3FC164"
        />
        <path
          d="M127.062 133.594C123.455 133.594 120.531 136.518 120.531 140.125V166.25C120.531 169.857 123.455 172.781 127.062 172.781H145.601C149.045 172.781 152.015 172.781 154.461 172.581C157.044 172.37 159.612 171.905 162.083 170.646C165.77 168.767 168.767 165.77 170.646 162.083C171.905 159.612 172.37 157.044 172.581 154.461C172.781 152.015 172.781 149.045 172.781 145.601V140.125C172.781 136.518 169.857 133.594 166.25 133.594H127.062Z"
          fill="#3FC164"
        />
        <path
          d="M61.75 107.469C58.1429 107.469 55.2188 110.393 55.2188 114V145.601C55.2186 149.045 55.2186 152.015 55.4184 154.461C55.6294 157.044 56.0952 159.612 57.3543 162.083C59.2329 165.77 62.2303 168.767 65.9171 170.646C68.3884 171.905 70.9566 172.37 73.5387 172.581C75.9851 172.781 78.9553 172.781 82.3982 172.781H100.937C104.545 172.781 107.469 169.857 107.469 166.25V114C107.469 110.393 104.545 107.469 100.937 107.469H61.75Z"
          fill="#3FC164"
        />
        <path
          d="M162.083 57.3543C159.612 56.0952 157.044 55.6294 154.461 55.4184C152.015 55.2186 149.045 55.2186 145.601 55.2188H127.062C123.455 55.2188 120.531 58.1429 120.531 61.75V114C120.531 117.607 123.455 120.531 127.062 120.531H166.25C169.857 120.531 172.781 117.607 172.781 114V82.3983C172.781 78.9553 172.781 75.9852 172.581 73.5387C172.37 70.9566 171.905 68.3884 170.646 65.9171C168.767 62.2303 165.77 59.2329 162.083 57.3543Z"
          fill="#3FC164"
        />
      </FloatingIcon>

      <FloatingIcon
        size="size-11"
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 4 : 12,
          right: isHovered ? "-60%" : "0%",
          top: isHovered ? "-10%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <rect width="228" height="228" rx="72" fill="#D4E8F4" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.1737 107.469C72.0856 106.515 74.8986 105.503 78.6377 104.568C87.4393 102.368 99.9447 100.937 114 100.937C128.055 100.937 140.561 102.368 149.362 104.568C153.101 105.503 155.914 106.515 157.826 107.469C155.914 108.423 153.101 109.434 149.362 110.369C140.561 112.57 128.055 114 114 114C99.9447 114 87.4393 112.57 78.6377 110.369C74.8986 109.434 72.0856 108.423 70.1737 107.469ZM75.4696 91.8959C85.5788 89.3686 99.1984 87.875 114 87.875C128.802 87.875 142.421 89.3686 152.53 91.8959C157.535 93.147 162.048 94.7406 165.467 96.7617C168.449 98.5243 172.781 101.93 172.781 107.469C172.781 113.007 168.449 116.413 165.467 118.176C163.79 119.167 161.851 120.055 159.719 120.851V157.505C159.719 165.189 155.091 172.943 146.765 175.25C137.439 177.834 126.112 179.312 114 179.312C101.888 179.312 90.5608 177.834 81.2343 175.25C72.9086 172.943 68.2812 165.189 68.2812 157.505V120.851C66.1494 120.055 64.2096 119.167 62.5328 118.176C59.5507 116.413 55.2188 113.007 55.2188 107.469C55.2188 101.93 59.5507 98.5243 62.5328 96.7617C65.9521 94.7406 70.4652 93.147 75.4696 91.8959Z"
          fill="#2AAFFC"
        />
        <path
          d="M121.019 54.2398L124.143 47.9927C125.346 45.5858 128.781 45.5858 129.984 47.9927L133.108 54.2398C133.424 54.8718 133.936 55.3843 134.568 55.7003L140.816 58.8238C143.222 60.0273 143.222 63.4621 140.816 64.6656L134.568 67.7892C133.936 68.1051 133.424 68.6176 133.108 69.2496L129.984 75.4967C128.781 77.9036 125.346 77.9036 124.143 75.4967L121.019 69.2496C120.703 68.6176 120.191 68.1051 119.558 67.7892L113.311 64.6656C110.904 63.4621 110.904 60.0273 113.311 58.8238L119.558 55.7003C120.191 55.3843 120.703 54.8718 121.019 54.2398Z"
          fill="#2AAFFC"
        />
        <path
          d="M89.3511 62.057L92.0676 56.6238C93.0304 54.6983 95.7782 54.6983 96.741 56.6238L99.4576 62.057C99.7104 62.5626 100.12 62.9725 100.626 63.2253L106.059 65.9419C107.985 66.9046 107.985 69.6525 106.059 70.6153L100.626 73.3318C100.12 73.5847 99.7104 73.9946 99.4576 74.5002L96.741 79.9333C95.7782 81.8588 93.0304 81.8588 92.0676 79.9333L89.3511 74.5002C89.0983 73.9946 88.6883 73.5847 88.1827 73.3318L82.7496 70.6153C80.824 69.6525 80.824 66.9046 82.7496 65.9418L88.1827 63.2253C88.6883 62.9725 89.0983 62.5626 89.3511 62.057Z"
          fill="#2AAFFC"
        />
      </FloatingIcon>

      <FloatingIcon
        size="size-11"
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 36 : 12,
          right: isHovered ? "-55%" : "0%",
          top: isHovered ? "150%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <rect
          width="228"
          height="228"
          rx="72"
          fill="#5F6BD5"
          fill-opacity="0.15"
        />
        <path
          d="M125.7 53.6199C119.196 47.0329 108.804 47.0329 102.3 53.6199C95.3989 60.6083 85.3629 71.6818 77.0218 84.5528C68.7505 97.3165 61.75 112.446 61.75 127.426C61.75 156.118 85.1787 179.313 114 179.313C142.821 179.313 166.25 156.118 166.25 127.426C166.25 112.446 159.25 97.3165 150.978 84.5528C142.637 71.6818 132.601 60.6083 125.7 53.6199Z"
          fill="#5F6BD5"
        />
      </FloatingIcon>

      <FloatingIcon
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -12 : 12,
          right: isHovered ? "-43%" : "0%",
          top: isHovered ? "200%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <rect width="228" height="228" rx="72" fill="#E5DCEE" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.75 74.8081V68.2812C61.75 64.6742 58.8258 61.75 55.2187 61.75C51.6117 61.75 48.6875 64.6742 48.6875 68.2812V94.4062C48.6875 98.0133 51.6117 100.937 55.2187 100.937H81.3437C84.9508 100.937 87.875 98.0133 87.875 94.4062C87.875 90.7992 84.9508 87.875 81.3437 87.875H68.7382C77.7774 72.2493 94.6685 61.75 114 61.75C142.856 61.75 166.25 85.1431 166.25 114C166.25 142.857 142.856 166.25 114 166.25C91.26 166.25 71.8971 151.72 64.7212 131.418C63.5192 128.016 59.7877 126.234 56.3868 127.436C52.9858 128.638 51.2033 132.369 52.4054 135.77C61.3683 161.129 85.5521 179.312 114 179.312C150.071 179.312 179.312 150.071 179.312 114C179.312 77.9289 150.071 48.6875 114 48.6875C92.6273 48.6875 73.6618 58.9523 61.75 74.8081ZM114 81.3437C117.607 81.3437 120.531 84.2679 120.531 87.875V111.295L138.212 128.975C140.762 131.526 140.762 135.662 138.212 138.212C135.662 140.762 131.526 140.762 128.975 138.212L109.382 118.618C108.157 117.394 107.469 115.732 107.469 114V87.875C107.469 84.2679 110.393 81.3437 114 81.3437Z"
          fill="#985FD5"
        />
      </FloatingIcon>
    </>
  );
}
