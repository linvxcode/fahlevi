import DarkmodeSwitch from "../../element/DarkmodeSwitch";
import Image from "../../element/Image";
import MotionOpacity from "../../element/MotionOpacity";
import MotionScale from "../../element/MotionScale";
const ImageHeader = () => {
  return (
    <div className="w-[180px] relative overflow-hidden">
      <MotionScale>
      <Image
        alt="img"
        src="/img/upworkE.jpg"
        width={640}
        height={663}
        // loading="lazy"
        priority
        className="rounded-full max-md:hidden border-[3px] mt-5 dark:border-[#171717] border-[#fff] w-[100px] relative z-[9]"
        />
        </MotionScale>
      <MotionOpacity delay={0.1}>
        <div className="h-8 w-[50%] -rotate-[57deg] absolute top-[15px] right-[25px] bg-neutral-200 "></div>
        <div className="h-8 w-[50%] -rotate-[57deg] absolute top-[15px]  bg-neutral-200 "></div>
        <div className="w-full h-20 bg-[#d4d4d4] absolute top-0 z-[-9] rounded-xl"></div>
      </MotionOpacity>
      <div className="absolute top-[40px] right-0 z-[99]">
        <DarkmodeSwitch />
      </div>
    </div>
  );
};

export default ImageHeader;
