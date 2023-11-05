import { Button } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import SectionHeading from "@/common/components/element/SectionHeading";
import { GoRocket } from "react-icons/go";
const ContactMail = () => {
  return (
    <div className="w-full h-auto bg-neutral-800 py-5 px-10 rounded-3xl mt-5">
      <div className="flex gap-2  mb-2">
        <GoRocket size={30} />
        <SectionHeading title="Lets Work Together" className="!text-xl" />
      </div>
      <div className="mb-2">
        <h1>
          I would love it if you could contact me via email to explore the
          prospect of collaborating or joining in on a project. I will welcome
          your message as it has the potential to lead to a mutually beneficial
          partnership.
        </h1>
      </div>
      <Button
        size="lg"
        color="default"
        className="lg:hover:bg-neutral-600 lg:transition-all lg:duration-300"
        as={Link}
        href="mailto:mfahlevi740@mail.com"
        target="__blank"
      >
        Contact Me
      </Button>
    </div>
  );
};

export default ContactMail;
