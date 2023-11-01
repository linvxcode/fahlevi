import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiJquery,
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiFramer
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  FramerMotion:<SiFramer size={iconSize}  /> ,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Laravel: <SiLaravel size={iconSize} className='text-red-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
  Redux: <SiRedux size={iconSize} className='text-purple-500' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),
  Jest: <SiJest size={iconSize} className='text-red-600' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Jquery: <SiJquery size={iconSize} />,
};