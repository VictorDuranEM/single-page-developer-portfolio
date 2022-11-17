import { Component, Show } from "solid-js";

type CTAProps = {
  className?: string;
  text: string;
  destination?: string;
  type: "button" | "link";
};

export const CTA: Component<CTAProps> = (props) => {
  return (
    <Show when={props.type === "link"} 
      fallback={ <button class={`inline-block uppercase text-white font-bold tracking-widest border-b-green border-b-2 pb-2.5 hover:text-green ${props.className}`}>{props.text}</button> }>
      { <a href={props.destination || '#'} class={`inline-block uppercase text-white font-bold tracking-widest border-b-green border-b-2 pb-2.5 hover:text-green ${props.className}`}>{props.text}</a> }
    </Show>
  );
};