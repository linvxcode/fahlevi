import { Button } from "@nextui-org/react";
import React, { useState } from "react";


interface fret6 {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

const Fret6 = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({

  });

  const fret6: fret6[] = [
    {
      note: "A#",
      label: "A#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftuts%2Ftutsup%2Faa%2B.wav?alt=media&token=e25af3d6-8fdb-45c7-b74c-a4c27f4e6223",
    },
    {
      note: "FDown",
      label: "FDown",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Fsecondtuts%2Ff%2B.wav?alt=media&token=f4b3d6c9-2cb6-4d6e-b5e8-44236756e851",
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
      <div className="w-[60px] left-[300px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
      {fret6.map((key) => (
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

export default Fret6;
