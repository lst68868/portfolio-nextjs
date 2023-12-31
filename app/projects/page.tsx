import Image from "next/image";
import { client } from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

interface Data {
  title: string;
  overview: any[]; // Overview as block content
  link: string;
  githubRepo?: string; // Optional link
  backendRepo?: string; // Optional link
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] | order(priority) {
    title,
    overview,
    link,
    githubRepo,
    backendRepo,
    _id,
    "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Projects() {
  const data: Data[] = await getProjects();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Fullstack Projects
        </h1>
      </div>

      <div className="gap-y-8 pt-8">
        {data.map((project) => (
          <article
            key={project._id}
            className="rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100 mb-8"
          >
            <div className="h-56 w-full relative">
              <Image
                fill
                src={project.imageUrl}
                alt="Image of the project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6">
              <a href={project.link} target="_blank">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <div className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                <BlockContent blocks={project.overview} />
                {/* Render overview as block content */}
              </div>

              <a
                href={project.link}
                target="_blank"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
              >
                Click here to visit!{" "}
                <span className="block transition-all group-hover:ms-0.5">
                  &rarr;
                </span>
              </a>

              {project.githubRepo && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
                >
                  GitHub Repo{" "}
                  <span className="block transition-all group-hover:ms-0.5">
                    &rarr;
                  </span>
                </a>
              )}

              {project.backendRepo && (
                <a
                  href={project.backendRepo}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
                >
                  Backend Repo{" "}
                  <span className="block transition-all group-hover:ms-0.5">
                    &rarr;
                  </span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
