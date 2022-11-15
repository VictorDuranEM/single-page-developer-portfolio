import { Component, For } from "solid-js";

type ProjectProps = {
  className?: string;
  title: string;
  technologies: string[];
  imageSmall: string;
  imageLarge: string;
};

export const Project: Component<ProjectProps> = (props) => {
  return (
    <div>
      <img
        srcSet={`${props.imageLarge} 1080w,
                 ${props.imageSmall} 686w`}
        sizes="(min-width: 1028px) 38vw,
                        (min-width: 768px) 45vw,
                        100vw"
        src={props.imageLarge} alt="project image" />
      <p class="uppercase">{props.title}</p>
      <div>
        <For each={props.technologies}>
          {(technology) => <p>{technology}</p>}
        </For>
      </div>
      <div>
        <a href="#">View Project</a>
        <a href="#">View Code</a>
      </div>
    </div>
  );
};