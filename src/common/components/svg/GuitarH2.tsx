import { Button } from "@nextui-org/react";
import React, { useState } from "react";

interface PianoKey {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

const GuitarH2 = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({
    E1: false,
    B2: false,
    G2: false,
    D2: false,
    A1: false,
    E3: false,
  });

  const pianoKeys: PianoKey[] = [
    {
      note: "E1",
      label: "E",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/tuts/E3.wav",
    },
    {
      note: "B2",
      label: "B",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/tuts/B2.wav",
    },
    {
      note: "G2",
      label: "G",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/tuts/G2.wav",
    },
    {
      note: "D2",
      label: "D",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/tuts/D2.wav",
    },
    {
      note: "A1",
      label: "A",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/tuts/A1.wav",
    },
    {
      note: "E3",
      label: "E",
      type: "white",
      className: "bg-white",
      src: "/audio/guitar/tuts/E1.wav",
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
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="36"
        height="211"
        viewBox="0 0 36 211"
        fill="none"
      >
        <g opacity="0.8">
          <rect
            width="35.06"
            height="210"
            transform="translate(0.5 0.47998)"
            fill="url(#pattern0)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_6_109"
              transform="scale(0.0285225 0.0047619)"
            />
          </pattern>
          <image
            id="image0_6_109"
            width="40"
            height="194"
            xlinkHref="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI1MzQ0NjZGRTFBMDExRThBOTc1OTA2RDc4NDlCRkFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI1MzQ0NjcwRTFBMDExRThBOTc1OTA2RDc4NDlCRkFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjUzNDQ2NkRFMUEwMTFFOEE5NzU5MDZENzg0OUJGQUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjUzNDQ2NkVFMUEwMTFFOEE5NzU5MDZENzg0OUJGQUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADCACgDAREAAhEBAxEB/8QAeQAAAwEBAQEAAAAAAAAAAAAAAgMEAAEFBgEBAQEBAQAAAAAAAAAAAAAAAQIAAwYQAAEDAwMCBQIFBQAAAAAAAAEAEQIhMQNBURJhcYHBIjIEkaHw0UJSE3KSMzQFEQEBAQEAAwEBAQAAAAAAAAAAARECITESQWFC/9oADAMBAAIRAxEAPwD66RIAMQRJ3Drx2vSgDfzVpZIODhg78r9QsxUIk5ZUqQKdnU0nBjV3pdOsTkLEhvA3CbGDCsjuKBEYyQNCf0pobESTKY1024qaRs7yjStRshi5H08t6uq/GdxYxxBPu161VyAUzHkx1d9uimtA4YxjAuTUk8dPwymQjkK1q4YkUc7JYidSf2uBWjbqgoxUBLVNgUgjIxaO54+ZU1Up8MZ4CQZxUvZlsGhmW8LA/ZFaJ3PMNapbxYqjVZFKOZEEv9mSlMByziMG4x00dSVYkOPG3fponWwr3TiIgy1P5KejyWCBkYl2sqtF9mTmCAYu7uRoUCAwQacy1XYkbM6FGzLAg62WrBgazmbChbop581syFY4luXIOS51V4Pddz5JQDmpNGGqmmRsLxiX9L3AqUaxn6qnjuN1mDjHKBervT+rsm+JjZsbGHarEe1tlYgc0owIlLQenqSVFKfBi+TLPKUzxiPaBqESNqmeQgEsKfddPkaLH6Yglxp2dGbI1/jH0xAFXo/UqokjM5PorKBDHuFNVExz5RkJ5ObbOFP0cFk+WJY5AD1MzlN6aRd8PIMuMcvcw8GuukT0lOY0jcRDvZ1z1RePI+UiRuaSG7O630ZAZRBy2huo6hjmDEZTBPtFS6efIP8AjZTCVBfXWquJoIRMgaUGiCUJcJlj7mrcsthijHhEw8i0RtV3RWBn+TDFKUcYZ2jHut6bCviieXI8QWH06uidNYqxwMm0IFzpRdIGPx4yyxJ7EDqPNDa5kxZOVA2wFiFNbUGbFl/mjAvSpdRlq5V//Ohkx/IkZH3CkRamq6cc+U93wOMnADXZ3VAVTkiKAku3ZAxRE1BJBAshsBGGLlEEAmvIa+K1jSvLjPJD52aRcRAaLaKeOrq+sxXjYkuWAq+q6JFI+uDdS+tkYx8SDF2+q2JYloEtuw3KxibHgiYkT97klE5OiEgMgduMnAGxS1MlEGJIqRUdx5JSLCeQHE3Dj8kxhSJINw1n6LWMHDQkAuXceKYyYuACLOG6KFKYikm180oLgDDMDqRQbSTDTZGkXNy33WrFxyccgL+lvV5oJZhOWMxZy1PsXUk6fti2oavSqRjk5xjxJoTt2olmnKBiHubraEc85hkiwcGii9LkVYizRNyNNxRUC82OR1LR2W6ZFkz5J5Gkaft2XP6JsZEh3d6PsFQwGTkJA8qA0ajNooVFuORlkJDOKnfZdUO5JARpcvRHRjzM+PjkBv06rjauUUSxcuBqPNP01aZoOVSGqtoW5JiE4kX1bouyRuJg0YfnosyXNAlz+KKLyZQiOhsPPRSdBkgWLM9q2fZFhikwJIMdD6T3XZzNANAAxNR3WLk+JjIcagErVi8UxKABjU0k6kuSxERLV6Keo0HlPpkIm4ouiYPHKUmAIDfqt2SaZM+l4mrlvBZioByYgOXNeqlhShJwGYBiW0KGd4SkCwFN+6oQGEkzBLMNT0oQlqc4IaIaQZvusQB4ZDEEPJpeJohhmJq9QWbdlNLT4iOoOpO66Y5lwiRMwBeT21a6FH8Rypci/kmChy8f5IG11NMHCEZjkQem/wBEzw18gzf4wqohOP8A2odvIqYqnfuvaNkpbP7v7u9kfphsfZrY2ut/pr6f/9k="
          />
        </defs>
      </svg>

      <div className="absolute flex top-0 mx-auto  flex-col items-center">
        {pianoKeys.map((key) => (
          <div className="flex justify-center flex-col" key={key.note}>
            <Button
              data-note={key.note}
              onClick={() => handleClick(key.note)}
              className="px-0 h-[2.24rem] min-w-unit-10 relative z-[99] bg-transparent"
            >
              <h1 className="text-xl text-black text-center">{key.label}</h1>
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

export default GuitarH2;
