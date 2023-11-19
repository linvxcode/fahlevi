import { Button } from "@nextui-org/react";
import React, { useState } from "react";



interface fret5 {
  note: string;
  label: string;
  type: string;
  className: string;
  src: string;
}

const Fret5 = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({

  });

  const fret5: fret5[] = [
    {
      note: "A",
      label: "A",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftuts%2Ftutsup%2Fa%2B.wav?alt=media&token=194395d7-ce64-4f46-9d88-ede65cec7410",
    },
    {
      note: "EDown",
      label: "EDown",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Fsecondtuts%2Fe%2B.wav?alt=media&token=c24943be-c079-4b67-81e2-dc6ae64a06bc",
    },
    {
      note: "CDownn#",
      label: "CDownn#",
      type: "white",
      className: "bg-white",
      src: "https://firebasestorage.googleapis.com/v0/b/instrument-90e24.appspot.com/o/guitar%2Ftripletuts%2Fcc%2B.wav?alt=media&token=b576fbd7-d8e7-488b-829d-db542e76f847",
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
      <div className="w-[60px] left-[240px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
      {fret5.map((key) => (
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

export default Fret5;
