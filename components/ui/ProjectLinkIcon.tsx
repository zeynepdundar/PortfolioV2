import { FaApple, FaGithub, FaGooglePlay } from "react-icons/fa";
import { Globe } from "lucide-react";
import type { ProjectLinkIcon as IconName } from "@/data/projects";

export function ProjectLinkIcon({
  name,
  className = "h-4 w-4",
}: {
  name: IconName;
  className?: string;
}) {
  switch (name) {
    case "appStore":
      return <FaApple className={className} aria-hidden />;
    case "googlePlay":
      return <FaGooglePlay className={className} aria-hidden />;
    case "github":
      return <FaGithub className={className} aria-hidden />;
    case "website":
      return <Globe className={className} aria-hidden strokeWidth={1.75} />;
  }
}
