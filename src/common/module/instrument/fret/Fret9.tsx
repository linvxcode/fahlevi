import { Button } from "@nextui-org/react";
import React, { useState } from "react";


interface fret9 {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

const Fret9 = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({

  });

  const fret9: fret9[] = [
    {
      note: "C#",
      label: "C#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftuts%2Ftutsup%2Fcc%2B.wav?alt=media&token=91733e26-f6d5-46b8-a94d-cea9886ab817",
    },
    {
      note: "GDown#",
      label: "GDown#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Fsecondtuts%2Fgg%2B.wav?alt=media&token=aff0ec4b-77b3-4868-9429-2283d063e476",
    },
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
      <div className="w-[60px] left-[480px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
      {fret9.map((key) => (
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
        <h1 className="text-4xl absolute top-[95px] left-[20px] rounded-full bg-neutral-700 w-[20px] h-[20px] text-black text-center"></h1>
      </div>
    </div>
  );
};

export default Fret9;
