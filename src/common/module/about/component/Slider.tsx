"use client";

import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";

import { STACKS } from "@/common/constant/stack";
import {  motion } from "framer-motion";

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className="flex flex-row gap-2 mr-3 rounded-full py-2 px-5 w-auto dark:text-neutral-50 ">
    {icon}
    <span className="flex basis-[80%]">{title}</span>
  </div>
);


const Skills = () => {
  const [skills, setSkills] = useState<Array<[string, ReactNode]>>([]);

  useEffect(() => {
    const skillsArray = Object.entries(STACKS);
    setSkills(skillsArray);
  }, []);

  const reverse = "0%" ;
  const isreverse = "-120%" ;
  return (
    <div className="space-y-8 mt-3 ">
      <div className="flex w-full">
        <div className="relative flex flex-col gap-y-4 justify-start py-2 w-full overflow-hidden">
          <motion.div
            className="flex w-full gap-2 "
            initial={{ translateX: reverse }}
            animate={{
              translateX: isreverse,
              transition: {
                // delay: 1,
                type: "spring",
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
            }}
          >
            {skills.map(([title, icon],index) => (
              <Tag key={index} icon={icon} title={title} />
            ))}
          </motion.div>
          {/* <StyledFade className='hidden dark:flex fade' /> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

const StyledFade = styled.div`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #171717,
    transparent 20%,
    transparent 80%,
    #171717
  );
  position: absolute;
  inset: 0;
`;
