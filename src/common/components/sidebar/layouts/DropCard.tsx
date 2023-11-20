import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Image from "../../element/Image";
import { RiProfileLine } from "react-icons/ri";
import { FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@nextui-org/react";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center w-full">
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative  w-full"
      >
        <Button
          onClick={() => setOpen((pv) => !pv)}
          size="lg"
          color="default"
          className={clsx(
            "lg:hover:bg-neutral-600 relative group lg:transition-all lg:duration-300"
          )}
        >
          <h1 className=" z-[9] flex items-center gap-2 dark:lg:group-hover:text-black lg:group-hover:text-white lg:transition-all lg:duration-300 relative">
            <span>
              <RiProfileLine size={30} />
            </span>
            Profile Card
          </h1>
          <div className="absolute top-0 right-[-10px] group-hover:z-[5] group-hover:rotate-12">
            <RiProfileLine
              size={50}
              className="dark:text-neutral-700 text-neutral-300 dark:group-hover:text-neutral-300 group-hover:text-neutral-700"
            />
          </div>
          <div className="absolute inset-0 lg:translate-y-[100%] dark:lg:bg-[#fff] lg:bg-neutral-800 lg:transition-transform lg:duration-300 lg:group-hover:translate-y-[0%]"></div>
        </Button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white dark:bg-neutral-800 shadow-xl absolute z-[99] top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <div className="flex  py-5 ">
            <div className="flex gap-2 flex-col">
              <Option
                setOpen={setOpen}
                className="!p-0 !text-xl hover:!bg-transparent !cursor-default dark:text-neutral-200 font-medium flex items-center gap-1"
                icon={
                  <Image
                    alt="img"
                    src="/img/upworkE.jpg"
                    width={640}
                    height={663}
                    // loading="lazy"
                    priority
                    className="rounded-full max-md:hidden border-[3px]  dark:border-[#171717] border-[#fff] w-[100px] relative z-[9]"
                  />
                }
              />
              <Option
                setOpen={setOpen}
                title="Fahlevi"
                className="!text-xl !py-0 hover:!bg-transparent !cursor-default dark:text-neutral-200 font-medium flex items-center gap-1"
                icon={<MdVerified className="text-blue-400" size={20} />}
              />
              <Option
                setOpen={setOpen}
                title="@vii_999_"
                className="!py-0 hover:!bg-transparent !cursor-default"
              />
              <div className="flex gap-3 mt-2 justify-center">
                <Link href="https://github.com/linvxcode" target="__blank">
                  <Option
                    setOpen={setOpen}
                    icon={
                      <FaGithub
                        size={20}
                        className="dark:text-white text-black"
                      />
                    }
                  />
                </Link>
                <Link href="http://tiktok.com/@linvxmusic" target="__blank">
                  <Option
                    setOpen={setOpen}
                    icon={
                      <FaTiktok
                        size={20}
                        className="dark:text-white text-black"
                      />
                    }
                  />
                </Link>
                <Link href="https://instagram.com/viii_999_?igshid=MzMyNGUyNmU2YQ==" target="__blank">
                  <Option
                    setOpen={setOpen}
                    icon={
                      <FaInstagram
                        size={20}
                        className="dark:text-white text-black"
                      />
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.ul>
      </motion.div>
    </div>
  );
};

interface OptionProps{
  setOpen?: any;
  icon?: ReactNode;
  title?: string; 
  className?: string;
}

const Option = ({ icon, setOpen, title, className }: OptionProps) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className={clsx(
        className,
        `flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md dark:hover:bg-neutral-700 hover:bg-neutral-300 hover:text-neutral-800 text-neutral-700 dark:text-neutral-200  transition-colors cursor-pointer`
      )}
    >
      <span>{title && <>{title}</>}</span>
      <motion.span variants={actionIconVariants} className="flex justify-center">
        {icon && <>{icon}</>}
      </motion.span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
