import { Button } from "@nextui-org/react";
import React, { useState } from "react";

interface fret13 {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

const Fret13 = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({

  });

  const fret13: fret13[] = [
    {
      note: "FF",
      label: "FF",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/tuts/tutsup/f++.wav",
    },
    // {
    //   note: "C4",
    //   label: "C4",
    //   type: "white",
    //   className: "bg-white",
    //   src: "/audio/guitar/whitetuts/c.wav",
    // },
    // {
    //   note: "A4",
    //   label: "A4",
    //   type: "white",
    //   className: "bg-white",
    //   src: "/audio/guitar/whitetuts/a.wav",
    // },
    // {
    //   note: "E4",
    //   label: "E4",
    //   type: "white",
    //   className: "bg-white",
    //   src: "/audio/guitar/whitetuts/e.wav",
    // },
    // {
    //   note: "B4",
    //   label: "B4",
    //   type: "white",
    //   className: "bg-white",
    //   src: "/audio/guitar/whitetuts/b.wav",
    // },
    // {
    //   note: "F",
    //   label: "F",
    //   type: "white",
    //   className: "bg-white",
    //   src: "/audio/guitar/whitetuts/f2.wav",
    // },
  ];

  const playMusic = (note: string) => {
    const audio = document.getElementById(note) as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setActive({ ...active, [note]: true });
    }
  };

  const handleClick = (note: string) => {
    if (active[note]) {
      stopMusic(note);
    } else {
      playMusic(note);
    }
    setActive((prevActive) => ({ ...prevActive, [note]: !prevActive[note] }));
  };

  const stopMusic = (note: string) => {
    setActive({ ...active, [note]: false });
  };

  return (
    <div>
      <div className="w-[60px] left-[720px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
      {fret13.map((key) => (
          <div className="flex justify-center flex-col" key={key.note}>
            <Button
              data-note={key.note}
              onClick={() => handleClick(key.note)}
              className="px-0  h-[2.24rem] min-w-unit-10  relative z-[99] bg-transparent"
            >
              <h1 className="text-2xl text-black text-center"></h1>
            </Button>
            <audio
              id={key.note}
              preload="auto"
              src={key.src}
              key={key.note}
            ></audio>
          </div>
        ))}
          
      </div>
    </div>
  );
};

export default Fret13;
