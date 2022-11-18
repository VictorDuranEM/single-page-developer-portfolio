import { CTA } from "./components/Link";
import { Component, createSignal, For } from "solid-js";
import { Logo } from "./components/Logo";
import { ProfilePicture } from "./components/ProfilePicture";
import { ExperienceItem } from "./components/ExperienceItem";
import { Project } from "./components/Project";
import { projects } from "./assets/projects";
import { TextField } from "./components/TextField";

const App: Component = () => {
  const [formValues, setFormValues] = createSignal({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = createSignal({
    name: false,
    email: false,
    message: false,
  });

  const [formErrorMessages, setFormErrorMessages] = createSignal({
    name: "",
    email: "",
    message: "",
  });

  const [formSendMessage, setFormSendMessage] = createSignal("");

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    setFormValues({ ...formValues(), [name]: value });
  };

  const handleFocus = (event: FocusEvent) => {
    const target = event.target as HTMLInputElement;
    setFormErrors({ ...formErrors(), [target.name]: false });
  };


  const handleLoseFocus = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (value == "") {
      setFormErrors({ ...formErrors(), [target.name]: true });
      setFormErrorMessages({ ...formErrorMessages(), [target.name]: "This field is required" });
    }

    if (target.name === "email" && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormErrors({ ...formErrors(), [target.name]: true });
      setFormErrorMessages({ ...formErrorMessages(), [target.name]: "Please enter a valid email" });
    }
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    let formHasErrors = false;
    if (formErrors().name || formErrors().email || formErrors().message) {
      formHasErrors = true;
    }
    if (name === "") {
      setFormErrors({ ...formErrors(), name: true });
      setFormErrorMessages({ ...formErrorMessages(), name: "This field is required" });
      formHasErrors = true;
    }
    if (email === "") {
      setFormErrors({ ...formErrors(), email: true });
      setFormErrorMessages({ ...formErrorMessages(), email: "This field is required" });
      formHasErrors = true;
    }
    if (message === "") {
      setFormErrors({ ...formErrors(), message: true });
      setFormErrorMessages({ ...formErrorMessages(), message: "This field is required" });
      formHasErrors = true;
    }

    if (!formHasErrors) {
      const processForm = async () => {
        const response = await fetch("/api/handler", {
          method: "POST",
          body: JSON.stringify(formValues()),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok || response.status !== 200) {
          setFormSendMessage("Something went wrong, please try again later");
          return;
        }
        setFormSendMessage("Thanks for your message!");
        setFormValues({ name: "", email: "", message: "" });
      };

      processForm();
    }
  }


  return (
    <div class="relative overflow-hidden">
      <header class="bg-darker text-white ">
        <div class="absolute max-w-[1110px] top-0 w-full pt-5 flex items-center flex-col gap-5 md:flex-row md:pt-8 md:px-8 md:justify-between xl:left-1/2 xl:-translate-x-1/2 xl:px-0">
          <Logo />
          <div class="flex gap-6">
            <img src="/icon-github.svg" alt="" class="w-5 md:w-auto" />
            <img src="/icon-frontend-mentor.svg" alt="" class="w-5 md:w-auto" />
            <img src="/icon-linkedin.svg" alt="" class="w-5 md:w-auto" />
            <img src="/icon-twitter.svg" alt="" class="w-5 md:w-auto" />
          </div>
        </div>
        <ProfilePicture className="w-[174px] mx-auto md:hidden relative z-10" />
      </header>

      <main class="bg-darker text-white pt-10 px-4 md:px-0 md:py-0">
        <div class="max-w-[1110px] mx-auto">
          <div class="text-center pb-20 md:text-left md:grid md:pl-8 md:grid-cols-[auto_322px] xl:grid-cols-[auto_444px] xl:pb-28 xl:px-0">
            <h1 class="font-bold text-4xl leading-none md:text-7xl md:pt-36 md:col-start-1 md:row-start-1 md:col-span-2 md:z-10 md:max-w-[64%] xl:text-[5.5rem] xl:max-w-[80%] xl:tracking-[-2.5px] xl:pt-52"><span class="md:block xl:inline">Nice to</span> meet you!
              <span class="block md:inline xl:block"> I'm
                <span class="md:block md:mt-3 xl:inline">
                  <span class="border-b-4 border-green md:border-b-[6px]"> Adam Keyes</span>.
                </span>
              </span>
            </h1>
            <p class="mt-7 text-gray md:text-lg md:mt-16 md:max-w-[445px] xl:mt-0">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
            <CTA type="link" destination="#contact" text="contact me" className="mt-6 md:justify-self-start md:mt-9 md:self-start xl:mt-0" />
            <div class="relative hidden md:block md:col-start-2 md:row-start-1 md:row-span-3">
              <ProfilePicture />
              <img src="/pattern-circle.svg" alt="" class="absolute bottom-16 left-0 -translate-x-1/2 hidden xl:block" aria-hidden="true" />
            </div>

          </div>
          <div class="px-8 xl:px-0">
            <div class="py-10 border-y border-white text-center flex flex-col gap-6 md:grid md:grid-cols-2 md:text-left md:gap-y-14 md:border-b-0 md:py-14 xl:py-20 xl:grid-cols-3 xl:gap-y-16">
              <ExperienceItem title="HTML" body="4 Years Experience" />
              <ExperienceItem title="CSS" body="4 Years Experience" />
              <ExperienceItem title="Javascript" body="4 Years Experience" />
              <ExperienceItem title="Accessibility" body="4 Years Experience" />
              <ExperienceItem title="React" body="3 Years Experience" />
              <ExperienceItem title="Sass" body="3 Years Experience" />
            </div>
            <div class="pt-24 pb-20 md:pt-16 md:pb-28">
              <div class="flex justify-between items-center">
                <h1 class="text-4xl md:text-7xl xl:text-[5.5rem]">Projects</h1>
                <CTA type="link" destination="#contact" text="Contact me" />
              </div>
              <div class="mt-10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-16 xl:mt-20 xl:gap-x-8 xl:gap-y-20">
                <For each={projects}>
                  {(project) => <Project {...project} className="mt-10 md:mt-0" />}
                </For>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="contact" class="bg-dark text-white pt-16 text-center px-4 md:px-8 xl:text-left xl:pt-24 xl:px-0">
        <div class="border-b border-white xl:max-w-[1110px] xl:mx-auto">
          <div class="md:max-w-[445px] mx-auto xl:grid xl:grid-cols-2 xl:grid-rows-[auto_1fr] xl:max-w-full xl:gap-x-56">
            <h1 class="text-4xl md:text-7xl xl:text-[5.5rem]">Contact</h1>
            <p class="text-gray mt-5 md:text-lg xl:row-start-2 xl:mt-9">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit} class="relative mt-12 flex flex-col gap-8 pb-20 md:pb-24 xl:col-start-2 xl:row-start-1 xl:row-span-2 xl:mt-0">
              <TextField
                name="name"
                value={formValues().name}
                handleChange={handleChange}
                type="text"
                placeholder="name"
                showError={formErrors().name}
                errorMessage={formErrorMessages().name}
                handleLoseFocus={handleLoseFocus}
                handleFocus={handleFocus} />
              <TextField
                name="email"
                value={formValues().email}
                handleChange={handleChange}
                type="email"
                placeholder="email"
                showError={formErrors().email}
                errorMessage={formErrorMessages().email}
                handleLoseFocus={handleLoseFocus}
                handleFocus={handleFocus} />
              <TextField
                name="message"
                value={formValues().message}
                handleChange={handleChange}
                type="textArea"
                placeholder="message"
                showError={formErrors().message}
                errorMessage={formErrorMessages().message}
                handleLoseFocus={handleLoseFocus}
                handleFocus={handleFocus} />
              <div class="flex justify-between">
                <p>{formSendMessage()}</p>
                <CTA type="button" text="Send Message" className="self-end" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer class="bg-dark text-white pt-10 pb-16 md:px-8 md:pt-8 md:pb-10 xl:pt-12 xl:pbrelative -20">
        <div class="xl:max-w-[1110px] xl:mx-auto flex items-center justify-between flex-col gap-5 md:flex-row">
          <Logo />
          <div class="flex gap-6">
            <img src="/icon-github.svg" alt="" class="cursor-pointer hover:icon-filter" />
            <img src="/icon-frontend-mentor.svg" alt="" class="cursor-pointer hover:icon-filter" />
            <img src="/icon-linkedin.svg" alt="" class="cursor-pointer hover:icon-filter" />
            <img src="/icon-twitter.svg" alt="" class="cursor-pointer hover:icon-filter" />
          </div>
        </div>
      </footer>

      {/* Rings in the background  */}
      <img src="/pattern-rings.svg" alt="" class="absolute top-32 h-[129px] left-0 -translate-x-1/2 md:top-24 xl:-translate-x-24" aria-hidden="true" />
      <img src="/pattern-rings.svg" alt="" class="absolute top-[77rem] h-[129px] right-0 translate-x-1/2 md:top-[66rem] md:translate-x-2/3 xl:translate-x-1/2" aria-hidden="true" />
      <img src="/pattern-rings.svg" alt="" class="absolute bottom-[17rem] h-[129px] left-0 -translate-x-1/2 md:-translate-x-3/4 md:bottom-[13rem] xl:-translate-x-1/3" aria-hidden="true" />
    </div>

  )
}

export default App;