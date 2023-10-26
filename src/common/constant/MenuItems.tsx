import HomeIcon from "../components/svg/homeIcon"
import AbouIcon from "../components/svg/AbouIcon"
import ProjectSvg from "../components/svg/ProjectSvg"
import PianoSvg from "../components/svg/PianoSvg"
import { MenuItemProps } from "../components/types/menu"

export const MenuItem: MenuItemProps[] = [
    {
        title: 'Home',
        href: '/',
        icon:  <HomeIcon/>
    },
    {
        title: 'About',
        href: '/about',
        icon: <AbouIcon/>
    },
    {
        title: 'Projects',
        href: '/projects',
        icon: <ProjectSvg/>
    },
    {
        title: 'Playground',
        href: '/instruments',
        icon: <PianoSvg/>
    }
]