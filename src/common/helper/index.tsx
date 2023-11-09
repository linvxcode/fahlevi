import { useMobile } from "../hooks/useMobile"

export function Animate() {
    const isMobile = useMobile()

    const AnimateScale = !isMobile ? {
        initial: {
            opacity: 0, scale: 0.8
        },
        whileInView:{
            opacity: 1, scale: 1
        },
        transition:{
            duration: 0.3
        },
        viewport:{once:true}
    }: {}
  return AnimateScale
}

export default Animate
