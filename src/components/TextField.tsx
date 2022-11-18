import { Component, Show } from "solid-js";

type TextFieldProps = {
  className?: string;
  name: string;
  value: string;
  handleChange: (e: Event) => void;
  type: string;
  placeholder: string;
  showError: boolean;
  errorMessage: string;
  handleLoseFocus: (event: Event) => void;
  handleFocus: (event: FocusEvent) => void;
};

export const TextField: Component<TextFieldProps> = (props) => {
  const borderColor = props.showError ? "border-red" : "border-white";
  return (
    <div class={`relative flex flex-col ${props.className}`}>
      <Show when={props.type === "textArea"}
        fallback={
          <input
            name={props.name}
            value={props.value}
            onInput={props.handleChange}
            type={props.type}
            placeholder={props.placeholder}
            class={`bg-transparent border-b ${borderColor} pb-4 px-6 text-white uppercase tracking-wide focus:border-green focus:outline-none`}
            onFocusOut={props.handleLoseFocus}
            onFocusIn={props.handleFocus}
          />
        }
      >
        <textarea
          name={props.name}
          value={props.value}
          onInput={props.handleChange}
          placeholder={props.placeholder}
          class={`bg-transparent border-b ${borderColor} pb-4 px-6 text-white uppercase tracking-wide focus:border-green focus:outline-none`}
          rows={4}
          onFocusOut={props.handleLoseFocus}
          onFocusIn={props.handleFocus}
        />
      </Show>
      <i class={`fa-solid fa-circle-exclamation text-red absolute right-0 ${props.showError ? 'block' : 'hidden'}`}></i>
      <p class="text-red text-xs mt-1.5 self-end" style={`display:${props.showError ? 'block' : 'none'}`}>{props.errorMessage}</p>
    </div>
  );
};