import { Component } from "solid-js";

type LinkProps = {
  className?: string;
  text: string;
};

export const Link: Component<LinkProps> = (props) => {
  return (
    <a href="#" class={`inline-block uppercase text-white font-bold tracking-widest border-b-green border-b-2 pb-2.5 hover:text-green ${props.className}`}>{props.text}</a>
  );
};