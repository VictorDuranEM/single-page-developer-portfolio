import { Component, For } from "solid-js";
import { CTA } from "./Link";

type ProjectProps = {
  className?: string;
  title: string;
  technologies: string[];
  imageSmall: string;
  imageLarge: string;
};

export const Project: Component<ProjectProps> = (props) => {
  return (
    <div class={`relative group ${props.className}`}>
      <div>
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
      </div>
      <div class="mt-5 flex gap-8 xl:absolute xl:inset-0 xl:mt-0 xl:flex-col xl:items-center xl:justify-center xl:text-center xl:gap-12 xl:h-[398px] xl:hidden xl:group-hover:flex">
        <div class="hidden xl:block bg-dark absolute inset-0 opacity-60"></div>
        <CTA type="link" destination="#" text="View Project" className="relative" />
        <CTA type="link" destination="#" text="View Code" className="relative" />
      </div>
    </div>
  );
};