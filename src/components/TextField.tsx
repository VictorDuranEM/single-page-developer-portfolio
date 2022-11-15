import { Component, Show } from "solid-js";

type TextFieldProps = {
  className?: string;
  type: string;
  placeholder: string;
  showError: boolean;
};

export const TextField: Component<TextFieldProps> = (props) => {
  const borderColor = props.showError ? "border-red" : "border-white";
  return (
    <div class={`flex flex-col ${props.className}`}>
      <Show when={props.type === "textArea"}
        fallback={
          <input type={props.type} placeholder={props.placeholder}
            class={`bg-transparent border-b-2 ${borderColor} pb-4 px-6 text-white uppercase tracking-wide focus:border-green focus:outline-none invalid:border-red`} />
        }
      >
        <textarea
          placeholder={props.placeholder}
          class={`bg-transparent border-b-2 ${borderColor} pb-4 px-6 text-white uppercase tracking-wide focus:border-green focus:outline-none invalid:border-red`}
          rows={4}  
        />
      </Show>
      <p class="text-red text-xs mt-1.5 self-end" style={`display:${props.showError ? 'block' : 'none'}`}>Sorry, invalid format here</p>
    </div>
  );
};