import { Component } from "solid-js";

type ExperienceItemProps = {
  className?: string;
  title: string;
  body: string;
};

export const ExperienceItem: Component<ExperienceItemProps> = (props) => {
  return (
    <div class={`${props.className}`}>
      <p class="font-bold text-3xl md:text-5xl">{props.title}</p>
      <p class="text-gray font-medium md:text-lg md:mt-3.5">{props.body}</p>
    </div>
  );
};