import { Github, Linkedin } from 'lucide-react'
import React from 'react'

export default function SocialMediaLinks() {
  return (
    <div className=" flex justify-between items-center gap-2">
      <a
        className="bg-primary p-4 text-gray-200 hover:text-gray-100  flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://github.com/Iam-Hafiz"
        target="_blank"
      >
        <Github />
      </a>
      <a
        className="bg-primary p-4 text-gray-200 hover:text-gray-100  flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://www.linkedin.com/in/hafizadam"
        target="_blank"
      >
        <Linkedin />
      </a>
    </div>
  );
}
