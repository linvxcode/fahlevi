import React from "react";
import SectionHeading from "@/common/components/element/SectionHeading";
import { GoRocket } from "react-icons/go";
import { RiMailSendLine } from "react-icons/ri";
import Buttons from "@/common/components/element/Buttons";

const ContactMail = () => {
  return (
    <div className="w-full h-auto bg-neutral-200 dark:bg-neutral-800 py-5 px-5 rounded-3xl mt-5">
      <div className="flex gap-2  mb-2">
        <GoRocket size={30} />
        <SectionHeading title="Lets Work Together" className="!text-xl" />
      </div>
      <div className="mb-2">
        <h1 className="leading-relaxed">
          I would love it if you could contact me via email to explore the
          prospect of collaborating or joining in on a project. I will welcome
          your message as it has the potential to lead to a mutually beneficial
          partnership.
        </h1>
      </div>
      <Buttons
        className="a"
        href="mailto:mfahlevi740@mail.com"
        icon={<RiMailSendLine size={20} className="dark:lg:group-hover:text-neutral-700 lg:group-hover:text-neutral-100" />}
        icons={<RiMailSendLine size={40}  className="dark:text-neutral-600 text-neutral-400 dark:lg:group-hover:text-neutral-300 lg:group-hover:text-neutral-700 lg:transition-all lg:duration-300" />}
        title="Contact Me"
      />
    </div>
  );
};

export default ContactMail;
