import { Button } from "@nextui-org/react";
import React, { useState } from "react";


interface fret2 {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

const Fret2 = () => {

  const [active, setActive] = useState<{ [note: string]: boolean }>({
    C4: false,
    C44: false,
    D4: false,
    E4: false,
    F4: false,
    F: false,
    G4: false,
    A4: false,
    B4: false,
    C5: false,
    D5: false,
  });

  const fret2: fret2[] = [
    {
      note: "F#",
      label: "F#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftuts%2Ftutsup%2Fff%2B.wav?alt=media&token=c2829946-1f09-4303-83f0-814e3bd33b34",
    },
    {
      note: "CDown#",
      label: "CDown#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Fsecondtuts%2Fcc%2B.wav?alt=media&token=baa39e00-46e7-4988-bfda-2d8fe082e03e",
    },
    {
      note: "ADown#",
      label: "ADown#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftripletuts%2Faa%2B.wav?alt=media&token=7129c73a-299d-4548-917d-e26e18fc2d43",
    },
    {
      note: "E4",
      label: "E4",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/whitetuts/e.wav",
    },
    {
      note: "B4",
      label: "B4",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/whitetuts/b.wav",
    },
    {
      note: "F",
      label: "F",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/whitetuts/f2.wav",
    },
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
      <div className="w-[60px] left-[60px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
      {fret2.map((key) => (
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

export default Fret2;
