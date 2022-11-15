import { Component, For } from "solid-js";
import { Link } from "./Link";

type ProjectProps = {
  className?: string;
  title: string;
  technologies: string[];
  imageSmall: string;
  imageLarge: string;
};

export const Project: Component<ProjectProps> = (props) => {
  return (
    <div class={`${props.className}`}>
      <img
        width={1080}
        height={800}
        srcSet={`${props.imageLarge} 1080w,
                 ${props.imageSmall} 686w`}
        sizes="(min-width: 1028px) 38vw,
                        (min-width: 768px) 45vw,
                        100vw"
        src={props.imageLarge} alt="project image" />
      <p class="uppercase text-2xl mt-5">{props.title}</p>
      <div class="flex text-gray mt-2 gap-4 text-lg">
        <For each={props.technologies}>
          {(technology) => <p>{technology}</p>}
        </For>
      </div>
      <div class="mt-5">
        <Link text="View Project" />
        <Link text="View Code" className="ml-8" />
      </div>
    </div>
  );
};