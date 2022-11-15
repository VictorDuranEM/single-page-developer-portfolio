import { Component } from "solid-js";

type LogoProps = {
  className?: string;
};

export const Logo: Component<LogoProps> = (props) => {
  return (
    <p class={`text-2xl font-bold ${props.className}`}>adamkeyes</p>
  );
};