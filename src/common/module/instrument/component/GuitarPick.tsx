"use client";
import React, { useState } from "react";
import Pick from "./Pick";
import Fret1 from "../fret/Fret1";
import Fret2 from "../fret/Fret2";
import Fret3 from "../fret/Fret3";
import Fret4 from "../fret/Fret4";
import Fret5 from "../fret/Fret5";
import Fret6 from "../fret/Fret6";
import Fret7 from "../fret/Fret7";
import Fret8 from "../fret/Fret8";
import Fret9 from "../fret/Fret9";
import Fret10 from "../fret/Fret10";
import Fret11 from "../fret/Fret11";
import Fret12 from "../fret/Fret12";

interface PianoKey {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

const GuitarPick = () => {
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

  const pianoKeys: PianoKey[] = [
    {
      note: "F4",
      label: "F4",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/whitetuts/f.wav",
    },
    {
      note: "C4",
      label: "C4",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/whitetuts/c.wav",
    },
    {
      note: "A4",
      label: "A4",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/whitetuts/a.wav",
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
    <div className="flex flex-col ">
      <Pick/>
      <Fret1 pianoKeys={pianoKeys} handleClick={handleClick} />
      <Fret2 />
      <Fret3/>
      <Fret4/>
      <Fret5/>
      <Fret6/>
      <Fret7/>
      <Fret8/>
      <Fret9/>
      <Fret10/>
      <Fret11/>
      <Fret12/>
    </div>
  );
};

export default GuitarPick;
