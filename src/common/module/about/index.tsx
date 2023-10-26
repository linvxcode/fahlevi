import Layouts from "@/common/components/element/Layouts"
import SectionHeading from "@/common/components/element/SectionHeading"
import AboutSubHead from "./layout/AboutSubHead"
import Breakline from "@/common/components/element/Breakline"
import AboutMinorHead from "./layout/AboutMinorHead"
import Resume from "./layout/Resume"
const AboutPage = () => {
  return (
    <Layouts>
        <SectionHeading title="About" />
        <AboutSubHead/>
        <Breakline/>
        <AboutMinorHead/>
        <Resume/>
    </Layouts>
  )
}

export default AboutPage
