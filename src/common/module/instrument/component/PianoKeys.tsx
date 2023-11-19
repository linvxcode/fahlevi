import React, { useEffect, useState } from "react";
import { pianoKeys } from "@/common/constant/Keys";
import Introduction from "./Introduction";

interface PianoKey {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

interface PianiKeysProps {
  instrumentData: {
    id: string;
    title: string;
    slug: string;
    img: string;
    c4: string;
  };
}

const PianoKeys: React.FC = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({

  });

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

  useEffect(() => {
    const keyMapping: { [key: string]: string } = {
      a: "C4",
      s: "D4",
      d: "E4",
      f: "F4",
      g: "G4",
      h: "A4",
      j: "B4",
      k: "C5",
      l: "D5",
      // Uppercase
      A: "C4",
      S: "D4",
      D: "E4",
      F: "F4",
      G: "G4",
      H: "A4",
      J: "B4",
      K: "C5",
      L: "D5",

      z: "C-",
      x: "D-",
      c: "E-",
      v: "F-",
      b: "G-",
      n: "A-",
      m: "B-",

      // Uppercase
      Z: "C-",
      X: "D-",
      C: "E-",
      V: "F-",
      B: "G-",
      N: "A-",
      M: "B-",
      // Black keys
      w: "C44",
      r: "D44",
      t: "F44",
      y: "G44",
      u: "A44",
      i: "B4",
      // Uppercase for black keys
      W: "C44",
      R: "D44",
      T: "F44",
      Y: "G44",
      U: "A44",
      I: "B4",
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const note = keyMapping[key];
      if (pianoKeys.some((pianoKey) => pianoKey.note === note)) {
        playMusic(note);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key;
      const note = keyMapping[key];
      if (pianoKeys.some((pianoKey) => pianoKey.note === note)) {
        stopMusic(note);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [active]);

  return (
    <div className="overflow-x-scroll w-[800px]  " >
    <div className=" bg-neutral-700 p-2 rounded-md Piano  w-[800px] overflow-x-scroll flex relative">
      {pianoKeys.map((key) => (
        <div
          key={key.note}
          data-note={key.note}
          className={`${key.className} cursor-pointer  flex items-end mr-1 key rounded-md  ${
            active[key.note] ? "bg-[#949191] active " : ""
          }}`}
          onClick={() => handleClick(key.note)}
        >
            <h3
              className={`label p-2 pointer-events-none select-none text-black ${
                key.type === "black" ? `text-white` : `text-black`
              }`}
            >
              {key.label}
            </h3>

          <audio
            id={key.note}
            preload="auto"
            src={key.src}
            key={key.note}
          ></audio>
        </div>
      ))}
    </div>
    <Introduction />
    </div>
  );
};

export default PianoKeys;


