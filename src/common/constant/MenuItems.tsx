import HomeIcon from "../components/svg/homeIcon"
import AbouIcon from "../components/svg/AbouIcon"
import ProjectSvg from "../components/svg/ProjectSvg"
import PianoSvg from "../components/svg/PianoSvg"
import { MenuItemProps } from "../components/types/menu"
import BlogSvg from "../components/svg/BlogSvg"
import {AiOutlineHome,AiOutlineUser, AiOutlineAppstore} from 'react-icons/ai'
import {FiRss as BlogIcon} from 'react-icons/fi'
import {PiPianoKeysLight as ProjectIcon} from 'react-icons/pi'

const size = 20;

export const MenuItem: MenuItemProps[] = [
    {
        title: 'Home',
        href: '/',
        icon:  <AiOutlineHome size={size} />
    },
    {
        title: 'About',
        href: '/about',
        icon: <AiOutlineUser size={size} />
    },
    {
        title: 'Blog',
        href: '/blog',
        icon: <BlogIcon size={size}/>
    },
    {
        title: 'Projects',
        href: '/projects',
        icon: <AiOutlineAppstore size={size}/>
    },
    {
        title: 'Playground',
        href: '/instruments',
        icon: <ProjectIcon size={size} />
    }
]