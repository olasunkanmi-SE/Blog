import { ProjectData } from "@/data/projectsData"

import { DevIcon } from "./dev-icons"
import Link from "./link"

interface ProjectCardProps extends ProjectData {
  className?: string
}

const ProjectCard = ({
  title,
  description,
  links,
  titleLink,
  skills,
  icons,
  className,
  designPattern,
}: ProjectCardProps) => (
  <div
    className={className ?? "md relative grow p-4 md:w-1/2 md:grow-0 2xl:w-1/3"}
  >
    <div className="relative h-full rounded-2xl border border-zinc-800/50 bg-[#030014]/50 p-px backdrop-blur-sm">
      <div className="flex h-full flex-col gap-4 rounded-2xl p-6">
        <div className="h-full overflow-hidden rounded-lg ">
          <div className="flex h-full flex-col justify-between ">
            <div>
              <h2 className="mb-3 max-w-none text-gray-700 dark:text-gray-100">
                <span className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                  {titleLink ? (
                    <Link href={titleLink} aria-label={`Link to ${title}`}>
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </span>
              </h2>
              <p className=" mb-3 max-w-none text-gray-700 dark:text-gray-400">
                {description}
              </p>
              <p className=" mb-3 max-w-none text-gray-700 dark:text-gray-400">
                <span className="mb-3 font-bold leading-8 tracking-tight">
                  Skills:
                </span>{" "}
                {skills}
              </p>
              <p className=" mb-3 max-w-none text-gray-700 dark:text-gray-400">
                <span className="mb-3 font-bold leading-8 tracking-tight">
                  Design pattern:
                </span>{" "}
                {designPattern}
              </p>
            </div>
            <div className="flex justify-self-auto">
              {links?.map((link, index) => (
                <div key={`${title}-${link.title}-links`}>
                  {index !== 0 && <span className="px-3">|</span>}
                  <Link
                    key={`${title}-${link.title}`}
                    href={link.href}
                    className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Link to ${link.title}`}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute  bottom-[-16px] right-[-16px] flex flex-row gap-3">
          {icons?.map((icon) => (
            <DevIcon key={icon} width={50} kind={icon} alt={icon} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard
