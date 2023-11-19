import { Button } from "@nextui-org/react";
import React, { useState } from "react";


interface fret4 {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}


const Fret4 = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({

  });

  const fret4: fret4[] = [
    {
      note: "G#",
      label: "G#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftuts%2Ftutsup%2Fgg%2B.wav?alt=media&token=b86ce17f-53fa-4fb0-bfe6-e12b6d3a69cb",
    },
    {
      note: "DDown#",
      label: "DDown#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Fsecondtuts%2Fdd%2B.wav?alt=media&token=8308ddfb-06d3-46aa-9f04-b3744acc614a",
    },
    {
      note: "CDownn",
      label: "CDownn",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftripletuts%2Fc%2B.wav?alt=media&token=65a7358a-93f1-467e-affd-38d0c1b851d3",
    },
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
      <div className="w-[60px] left-[180px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
      {fret4.map((key) => (
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

export default Fret4;
