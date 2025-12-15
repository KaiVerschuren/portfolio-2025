'use client';

import { useRef, useEffect } from "react";
import { useInView } from "motion/react";

import Image from "next/image";
import Link from "next/link";

import ProjectItem from "@/components/projectItem";
import ExperienceItem from '@/components/experienceItem';

import GithubIcon from "@/images/GithubIcon.png";
import EmailIcon from "@/images/EmailIcon.png";

export default function Home() {
  var activeLink = 0; // 0, 1, 2 for each respecive link
  const ref = useRef(null);
  const isInView = useInView({
  margin: "100px"
})

  useEffect(() => {
  console.log("Element is in view: ", isInView)
}, [isInView])
  return (
    <div className="flex flex-col md:flex-row gap-4 px-2 md:h-screen py-32">
      <div className="flex flex-col justify-between gap-4 flex-1">
        <div>
          <h1 className="text-5xl mb-2">Kai Verschuren</h1>
          <h2 className="text-xl mb-2">Fullstack Web Developer</h2>
          <p className="text-muted">
            A passionate <strong>Frontend / Fullstack</strong> web developer and <strong>UI/UX</strong> enthusiast specialized in building stunning interactive websites/applications.
          </p>
        </div>
        <div className="">
          <nav className='flex flex-col gap-2'>
            <Link href={"#projects"} className="flex items-center gap-2 text-foreground cursor-pointer w-fit">
              <div className="w-3 h-3 rounded-xl bg-foreground inline-block">
              </div>
              Projects
            </Link>
            <Link href={"#about"} className="flex items-center gap-2 text-foreground cursor-pointer w-fit">
              <div className="w-3 h-3 rounded-xl bg-foreground inline-block">
              </div>
              About me
            </Link>
            <Link href={"#experience"} className="flex items-center gap-2 text-foreground cursor-pointer w-fit">
              <div className="w-3 h-3 rounded-xl bg-foreground inline-block">
              </div>
              Experience
            </Link>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"https://github.com/kaiverschuren"}>
            <Image src={GithubIcon} width={32} height={32} alt="Github" className="invert opacity-50 scale-90 hover:scale-100 hover:opacity-100 transition all"/>
          </Link>
          <Link href={"mailto:verschurenkai@gmail.com"}>
            <Image src={EmailIcon} width={32} height={32} alt="Email" className="invert opacity-50 scale-90 hover:scale-100 hover:opacity-100 transition all"/>
          </Link>
          <a href="/cv.png" download>
            {/* <Image src={EmailIcon} width={32} height={32} alt="Email" /> */}
            <div className="bg-foreground text-background rounded-[50%] font-bold w-8 h-8 flex items-center justify-center opacity-50 scale-90 hover:scale-100 hover:opacity-100 transition all">
              CV
            </div>
          </a>
        </div>
      </div>
      <div className="flex-1 md:overflow-auto md:max-h-screen scroll-smooth">
        <div id="projects" ref={ref}>
          <h2 className="text-lg mb-2">Projects</h2>
          <p className="text-muted mb-4">
            Below are some of the projects I have developed over my first 2 years of coding. Please note that some of these projects are unfinished—either because I lacked the necessary skills at the time or simply moved on to more interesting challenges. However, rest assured I plan to revisit and improve these projects in the future.
          </p>
          <ProjectItem
          title="GoodieMaticAA"
          description="Vending Machine w/ Website Control"
          year="2025"
          link="https://github.com/KaiVerschuren/Proftaak-2025"
          />
          <ProjectItem
          title="CoinCove"
          description="Cryptocurrency trading platform"
          year="2024"
          link="https://github.com/KaiVerschuren/Proftaak"
          />
          <ProjectItem
          title="Joy Mapper"
          description="XInput Joystick and button mapper"
          year="2025"
          link="https://github.com/KaiVerschuren/Joy-mapper"
          />
        </div>
        <div id='about' className='mt-8'>
          <h2 className='text-xl mb-2'>About me</h2>
          <p className='text-muted'>
            I’m Kai, a 17-year-old student developer from the Netherlands. I enjoy building projects where I can experiment with different tools and ideas. So far, I’ve been working with PHP, CSS, and JavaScript, and I’ve also been exploring React, Next.js, Tailwind, and even some C#. I like learning new techniques step by step and applying them in real projects to keep improving my skills.
          </p>
        </div>
        <div id='experience' className='mt-8'>
          <h2 className='text-xl mb-4'>Experience</h2>
          <h3 className='mb-2'>Studies</h3>
          <div className="flex flex-col gap-4">
            <ExperienceItem
              time="2023 - Present"
              title="Ter AA - MBO Software Development"
              description="Learning web development, programming, and software design."
              link="https://www.ter-aa.nl/"
            />
            <ExperienceItem
              time="2019 - 2023"
              title="Metameer - PIE"
              description="Studied Producing, Installing, and Energy (PIE)."
              link="https://www.metameer.nl/"
            />

          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
