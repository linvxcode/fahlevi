import { Button } from "@nextui-org/react";
import React, { useState } from "react";

interface fret8 {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

const Fret8 = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({

  });

  const fret8: fret8[] = [
    {
      note: "C",
      label: "C",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftuts%2Ftutsup%2Fc%2B.wav?alt=media&token=155a44e2-bce7-4229-89da-4bfb62845e85",
    },
    {
      note: "GDown",
      label: "GDown",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Fsecondtuts%2Fg%2B.wav?alt=media&token=dc1d2444-279b-48b6-8055-bbc96b086722",
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
      <div className="w-[60px] left-[420px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
      {fret8.map((key) => (
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

export default Fret8;
