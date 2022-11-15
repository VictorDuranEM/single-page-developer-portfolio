import { ContactLink } from "./components/ContactLink";
import { Component, For } from "solid-js";
import { Logo } from "./components/Logo";
import { ProfilePicture } from "./components/ProfilePicture";
import { ExperienceItem } from "./components/ExperienceItem";
import { Project } from "./components/Project";
import { projects } from "./assets/projects";
import { TextField } from "./components/TextField";

const App: Component = () => {
  return (
    <>
      <header class="bg-darker text-white">
        <div class="absolute top-0 w-full pt-5 flex justify-between items-center flex-col gap-5">
          <Logo />
          <div class="flex gap-6">
            <img src="/icon-github.svg" alt="" class="w-5" />
            <img src="/icon-frontend-mentor.svg" alt="" class="w-5" />
            <img src="/icon-linkedin.svg" alt="" class="w-5" />
            <img src="/icon-twitter.svg" alt="" class="w-5" />
          </div>
        </div>
        <ProfilePicture className="w-[174px] mx-auto md:hidden relative z-10" />
      </header>

      <main class="bg-darker text-white pt-10 px-4">
        <div class="text-center pb-20 border-b border-lightGray">
          <h1 class="font-bold text-4xl leading-none">Nice to meet you!
            <span class="block">I'm
              <span class="border-b-4 border-green"> Adam Keyes</span>.</span></h1>
          <p class="mt-7 text-gray">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
          <ContactLink text="contact me" className="mt-6" />
          <ProfilePicture className="hidden md:block" />
        </div>
        <div class="py-10 border-b border-lightGray text-center flex flex-col gap-6">
          <ExperienceItem title="HTML" body="4 Years Experience" />
          <ExperienceItem title="CSS" body="4 Years Experience" />
          <ExperienceItem title="Javascript" body="4 Years Experience" />
          <ExperienceItem title="Accessibility" body="4 Years Experience" />
          <ExperienceItem title="React" body="3 Years Experience" />
          <ExperienceItem title="Sass" body="3 Years Experience" />
        </div>
        <div class="pt-20">
          <div>
            <h1>Projects</h1>
            <ContactLink text="Contact me" />
          </div>
          <div>
            <For each={projects}>
              {(project) => <Project {...project} />}
            </For>
          </div>
        </div>
      </main>

      <section class="bg-dark text-white">
        <h1>Contact</h1>
        <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        <form>
          <TextField type="text" placeholder="name" showError={false} />
          <TextField type="email" placeholder="email" showError={false} />
          <TextField type="textArea" placeholder="message" showError={false} />
          <ContactLink text="Send Message" />
        </form>
      </section>

      <footer class="bg-dark text-white flex items-center justify-between">
        <Logo />
        <div class="flex">
          <img src="/icon-github.svg" alt="" />
          <img src="/icon-frontend-mentor.svg" alt="" />
          <img src="/icon-twitter.svg" alt="" />
          <img src="/icon-linkedin.svg" alt="" />
        </div>
      </footer>
      
      
      <img src="/pattern-rings.svg" alt="" class="absolute top-32 h-[129px] right-1/2" aria-hidden="true" />
      <img src="/pattern-rings.svg" alt="" class="absolute top-[1233px] h-[129px] left-1/2" aria-hidden="true" />
    </>

  )
}

export default App;