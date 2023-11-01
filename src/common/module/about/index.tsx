import Layouts from "@/common/components/element/Layouts"
import SectionHeading from "@/common/components/element/SectionHeading"
import AboutSubHead from "./layout/AboutSubHead"
import Breakline from "@/common/components/element/Breakline"
import AboutMinorHead from "./layout/AboutMinorHead"
import Resume from "./layout/Resume"
import Skill from "./layout/Skill"
import Education from "./component/Education"
const AboutPage = () => {
  return (
    <Layouts>
        <SectionHeading title="About" />
        <AboutSubHead/>
        <Breakline/>
        <AboutMinorHead/>
        <Resume/>
        <Breakline className="mt-10"/>
        <Skill/>
        <Breakline className="mt-10"/>
        <Education/>
    </Layouts>
  )
}

export default AboutPage
