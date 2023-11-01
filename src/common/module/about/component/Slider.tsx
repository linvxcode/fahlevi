'use client'

import styled from '@emotion/styled';
import { ReactNode, useEffect, useState } from 'react';

import InfiniteLoopSlider from '@/common/components/element/InfiniteLoopSlider';
import { STACKS } from '@/common/constant/stack';

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className='flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50 shadow-sm border border-neutral-300 dark:border-neutral-700' >
    {icon}
    <span>{title}</span>
  </div>
);

const Skills = () => {

  const [shuffledSkills, setShuffledSkills] = useState<
    Array<[string, ReactNode]>
  >([]);

  useEffect(() => {
    const skillsArray = Object.entries(STACKS);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider key={index} isReverse={index === 1}>
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <div className='space-y-8 mt-3'>
      <div className='flex w-full'>
        <div className='relative flex flex-col gap-y-4 justify-start py-2 w-full overflow-hidden' >
          {sliders}
          <StyledFade className='hidden dark:flex fade' />
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