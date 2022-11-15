import { Link } from "./components/Link";
import { Component, For } from "solid-js";
import { Logo } from "./components/Logo";
import { ProfilePicture } from "./components/ProfilePicture";
import { ExperienceItem } from "./components/ExperienceItem";
import { Project } from "./components/Project";
import { projects } from "./assets/projects";
import { TextField } from "./components/TextField";

const App: Component = () => {
  return (
    <div class="relative overflow-hidden">
      <header class="bg-darker text-white ">
        <div class="absolute max-w-[1110px] top-0 w-full pt-5 flex items-center flex-col gap-5 md:flex-row md:pt-8 md:px-8 md:justify-between xl:left-1/2 xl:-translate-x-1/2">
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
        <div class="max-w-[1150px] mx-auto">
          <div class="text-center pb-20 md:text-left md:grid md:pl-8 md:grid-cols-[auto_322px] xl:grid-cols-[auto_444px]">
            <h1 class="font-bold text-4xl leading-none md:text-7xl md:pt-36 md:col-start-1 md:row-start-1 md:col-span-2 md:z-10 md:max-w-[64%] xl:text-[5.5rem] xl:max-w-[80%] xl:tracking-[-2.5px] xl:pt-52"><span class="md:block xl:inline">Nice to</span> meet you!
              <span class="block md:inline xl:block"> I'm
                <span class="md:block md:mt-3 xl:inline">
                  <span class="border-b-4 border-green md:border-b-[6px]"> Adam Keyes</span>.
                </span>
              </span>
            </h1>
            <p class="mt-7 text-gray md:text-lg md:mt-16 md:max-w-[445px] xl:mt-0">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
            <Link text="contact me" className="mt-6 md:justify-self-start md:mt-9 md:self-start xl:mt-0" />
            <ProfilePicture className="hidden md:block md:col-start-2 md:row-start-1 md:row-span-3" />
          </div>
          <div class="px-8">
            <div class="py-10 border-y border-white text-center flex flex-col gap-6 md:grid md:grid-cols-2 md:text-left md:gap-y-14 md:border-b-0 md:py-14">
              <ExperienceItem title="HTML" body="4 Years Experience" />
              <ExperienceItem title="CSS" body="4 Years Experience" />
              <ExperienceItem title="Javascript" body="4 Years Experience" />
              <ExperienceItem title="Accessibility" body="4 Years Experience" />
              <ExperienceItem title="React" body="3 Years Experience" />
              <ExperienceItem title="Sass" body="3 Years Experience" />
            </div>
            <div class="pt-24 pb-20 md:pt-16 md:pb-28">
              <div class="flex justify-between items-center">
                <h1 class="text-4xl md:text-7xl">Projects</h1>
                <Link text="Contact me" />
              </div>
              <div class="mt-10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-16">
                <For each={projects}>
                  {(project) => <Project {...project} className="mt-10 md:mt-0" />}
                </For>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section class="bg-dark text-white pt-16 text-center px-4 md:px-8">
        <div class="border-b border-white">
          <div class="md:max-w-[445px] mx-auto">
            <h1 class="text-4xl md:text-7xl">Contact</h1>
            <p class="text-gray mt-5 md:text-lg">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            <form class="mt-12 flex flex-col gap-8 pb-20 md:pb-24">
              <TextField type="text" placeholder="name" showError={false} />
              <TextField type="email" placeholder="email" showError={false} />
              <TextField type="textArea" placeholder="message" showError={false} />
              <Link text="Send Message" className="self-end" />
            </form>
          </div>
        </div>
      </section>

      <footer class="bg-dark text-white flex items-center justify-between pt-10 pb-16 flex-col gap-5 md:flex-row md:px-8 md:pt-8 md:pb-10">
        <Logo />
        <div class="flex gap-6">
          <img src="/icon-github.svg" alt="" />
          <img src="/icon-frontend-mentor.svg" alt="" />
          <img src="/icon-twitter.svg" alt="" />
          <img src="/icon-linkedin.svg" alt="" />
        </div>
      </footer>

      {/* Rings in the background  */}
      <img src="/pattern-rings.svg" alt="" class="absolute top-32 h-[129px] left-0 -translate-x-1/2 md:top-24" aria-hidden="true" />
      <img src="/pattern-rings.svg" alt="" class="absolute top-[77rem] h-[129px] right-0 translate-x-1/2 md:top-[66rem] md:translate-x-2/3" aria-hidden="true" />
      <img src="/pattern-rings.svg" alt="" class="absolute bottom-[17rem] h-[129px] left-0 -translate-x-1/2 md:-translate-x-3/4 md:bottom-[13rem]" aria-hidden="true" />
    </div>

  )
}

export default App;