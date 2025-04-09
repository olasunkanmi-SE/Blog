import projectsData from "@/data/projectsData"

import ProjectCard from "@/components/project-card"

export const metadata = {
  title: "About",
  description: `My projects page, where I showcase some of my software engineering projects. From building web apps with TypeScript and Rust, my projects demonstrate my diverse skill set and experience. `,
}

export default async function Projects() {
  return (
    <>
      {" "}
      <div className="container divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Open Source Projects
          </h1>
        </div>
        <div className=" pt-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData
              .filter((d) => d.type === "Open")
              .map((d) => (
                <ProjectCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  titleLink={d.titleLink}
                  skills={d.skills}
                  designPattern={d.designPattern}
                  links={d.links}
                  icons={d.icons}
                  type={d.type}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="container divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>
        <div className=" pt-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData
              .slice(0, 4)
              .filter((d) => d.type !== "Open")
              .map((d) => (
                <ProjectCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  titleLink={d.titleLink}
                  skills={d.skills}
                  links={d.links}
                  icons={d.icons}
                  designPattern={d.designPattern}
                  type={d.type}
                  className="md relative grow p-4 md:w-1/2 md:grow-0"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
