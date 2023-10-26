
import React, { useEffect, useState } from "react";

interface PianoKey {
  note: string;
  label: string;
  type: string;
  className: string;
}

interface PianiKeysProps {
  instrumentData: {  id: string;
    title: string;
    slug: string;
    img: string;
    c4:string;
  }
}

const PianoKeys: React.FC = () => {
  const [active, setActive] = useState<{ [note: string]: boolean }>({
    C4: false,
    D4: false,
    E4: false,
    F4:false,
    G4:false,
    A4:false,
    B4:false,
    C5:false,
    D5:false
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

  const pianoKeys: PianoKey[] = [
    { note: "C4", label: "C4", type: "white" , className: "bg-white"},
    { note: "C44", label: "C44", type: "black" , className: "bg-black text-white"},
    { note: "D4", label: "D4", type: "white", className: "bg-white"},
    { note: "E4", label: "E4", type: "white", className: "bg-white"},
    { note: "F4", label: "F4", type: "white", className: "bg-white"},
    { note: "G4", label: "G4", type: "white", className: "bg-white"},
    { note: "A4", label: "A4", type: "white", className: "bg-white"},
    { note: "B4", label: "B4", type: "white", className: "bg-white"},
    { note: "C5", label: "C5", type: "white", className: "bg-white"},
    { note: "D5", label: "D5", type: "white", className: "bg-white"},
  ];

  const audioPiano = [
    {id : "C4", src: '/audio/whitetuts/c4.wav'},
    {id : "C44",  src: '/audio/blacktuts/c44.wav'},
    {id : "D4",  src: '/audio/whitetuts/d4.wav'},
    {id : "D44",  src: '/audio/blacktuts/d44.wav'},
    {id : "E4",  src: '/audio/whitetuts/e4.wav'},
    {id : "F4",  src: '/audio/whitetuts/f4.wav'},
    {id : "F44",  src: '/audio/blacktuts/f44.wav'},
    {id : "G4",  src: '/audio/whitetuts/g4.wav'},
    {id : "G44",  src: '/audio/blacktuts/g44.wav'},
    {id : "A4",  src: '/audio/whitetuts/a4.wav'},
    {id : "A44",  src: '/audio/blacktuts/a44.wav'},
    {id : "B4",  src: '/audio/whitetuts/b4.wav'},
    {id : "C5",  src: '/audio/whitetuts/c5.wav'},
    {id : "D5",  src: '/audio/whitetuts/d5.wav'},
    
  ]

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

    // const handleMouseUp = () => {
    //   removeActiveStates();
    // };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    // document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      //  document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [active]);

  return (
    <div className="flex">
      {pianoKeys.map((key) => (
         <div
         key={key.note}
         data-note={key.note}
         className={`${key.className} key white relative  h-[200px] ${active[key.note] ? 'bg-[#949191] active' : 'bg-white'}}`}
         onClick={() => handleClick(key.note)}
       >
         <h3 className={`label text-black ${key.type === 'black' ? `text-white` :  `text-black`}`}>{key.label}</h3>
         
       </div>
      ))}
      {audioPiano?.map((audio, index) => (
        <audio id={audio.id} preload="auto" src={audio.src} key={index}></audio>
      ))}
    </div>
  );
};

export default PianoKeys;













// import React, { useState, useEffect } from "react";

// interface PianiKeysProps {
//   instrumentData: {  id: string;
//     title: string;
//     slug: string;
//     img: string;
//     c4:string;
//   }
// }

// const PianoKeys = ({instrumentData}: PianiKeysProps) => {
//   const [active, setActive] = useState<{ [note: string]: boolean }>({
//     C4: false,
//     D4: false,
//     E4: false,
//     F4:false,
//     G4:false,
//     A4:false,
//     B4:false,
//     C5:false,
//     D5:false
//   });
//   useEffect(() => {
//     const keyMapping: { [key: string]: string } = {
//       a: "C4",
//       s: "D4",
//       d: "E4",
//       f: "F4",
//       g: "G4",
//       h: "A4",
//       j: "B4",
//       k: "C5",
//       l: "D5",
//       // Uppercase
//       A: "C4",
//       S: "D4",
//       D: "E4",
//       F: "F4",
//       G: "G4",
//       H: "A4",
//       J: "B4",
//       K: "C5",
//       L: "D5",
//       // Black keys
//       w: "C44",
//       r: "D44",
//       t: "F44",
//       y: "G44",
//       u: "A44",
//       i: "B4",
//       // Uppercase for black keys
//       W: "C44",
//       R: "D44",
//       T: "F44",
//       Y: "G44",
//       U: "A44",
//       I: "B4",
//     };

//     const handleKeyDown = (e: KeyboardEvent) => {
//       const key = e.key;
//       const note = keyMapping[key];
//       if (note) {
//         playMusic(note);
//       }
//     };

//     const handleKeyUp = (e: KeyboardEvent) => {
//       const key = e.key;
//       const note = keyMapping[key];
//       if (note) {
//         stopMusic(note);
//       }
//     };

//     const playMusic = (note: string) => {
//       const audio = document.getElementById(note) as HTMLAudioElement;
//       if (audio) {
//         audio.currentTime = 0;
//         audio.play();
//         setActive({ ...active, [note]: true });
//       }
//     };

//     const stopMusic = (note: string) => {
//       setActive({ ...active, [note]: false });
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("keyup", handleKeyUp);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("keyup", handleKeyUp);
//     };
//   }, [active]);

//   return (
//     <div>
//       <div
//         className="flex justify-center justify-items-center h-[200px]"
//         id="key"
//       >
//         <div data-note="B4" className={`key white blck relative ${active.B4 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <h3  className="tuts  dark:text-black absolute top-[170px]">B4</h3>
//         </div>
//         <div data-note="C4" className={`key white blck relative ${active.C4 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <h3  className="tuts  dark:text-black absolute top-[170px]">C4</h3>
//         <div data-note="C44" className={`key absolute right-[-20px] rounded-b-md z-[9] h-32 w-3/6 flex items-end ${active.C44 ? 'bg-[#C0C0C0]' : 'bg-black'}`}>
//           <button className="tuts dark:text-white">C#</button>
//         </div>
//         </div>
//         <div data-note="D4" className={`key relative white blck ${active.D4 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <button className="tuts dark:text-black  absolute top-[170px]">D4</button>
//           <div data-note="D44" className={`key absolute right-[-20px] rounded-b-md z-[9] h-32 w-3/6 flex items-end ${active.D44 ? 'bg-[#C0C0C0]' : 'bg-black'}`}>
//           <button className="tuts dark:text-white ">D#</button>
//         </div>
//         </div>
//         <div data-note="E4" className={`key relative white ${active.E4 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <button className="tuts dark:text-black  absolute top-[170px]">E4</button>
//         </div>
//         <div data-note="F4" className={`key relative white blck ${active.F4 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <button className="tuts dark:text-black  absolute top-[170px]">F4</button>
//           <div data-note="F44" className={`key absolute right-[-20px] rounded-b-md z-[9] h-32 w-3/6 flex items-end ${active.F44 ? 'bg-[#C0C0C0]' : 'bg-black'}`}>
//           <button className="tuts dark:text-white ">F#</button>
//         </div>
//         </div>
//         <div data-note="G4" className={`key relative white blck ${active.G4 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <button className="tuts dark:text-black  absolute top-[170px]">G4</button>
//           <div data-note="G44" className={`key absolute right-[-20px] rounded-b-md z-[9] h-32 w-3/6 flex items-end ${active.G44 ? 'bg-[#C0C0C0]' : 'bg-black'}`}>
//           <button className="tuts dark:text-white ">G#</button>
//         </div>
//         </div>
//         <div data-note="A4" className={`key relative white blck ${active.A4 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <button className="tuts dark:text-black  absolute top-[170px]">A4</button>
//           <div data-note="A44" className={`key absolute right-[-20px] rounded-b-md z-[9] h-32 w-3/6 flex items-end ${active.A44 ? 'bg-[#C0C0C0]' : 'bg-black'}`}>
//           <button className="tuts dark:text-white ">A#</button>
//         </div>
//         </div>
//         <div data-note="B4" className={`key relative white ${active.B4 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <button className="tuts dark:text-black  absolute top-[170px]">B4</button>
//         </div>
//         <div data-note="C5" className={`key relative white ${active.C5 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <button className="tuts dark:text-black  absolute top-[170px]">C5</button>
//           <div data-note="C55" className={`key absolute right-[-20px] rounded-b-md z-[9] h-32 w-3/6 flex items-end ${active.C55 ? 'bg-[#C0C0C0]' : 'bg-black'}`}>
//           <button className="tuts dark:text-white ">C#</button>
//         </div>
//         </div>
//         <div data-note="D5" className={`key relative white ${active.D5 ? 'bg-[#C0C0C0]' : 'bg-white'}`}>
//           <button className="tuts dark:text-black  absolute top-[170px]">D5</button>
//         </div>
//       </div>
//     <div>
//       <audio id="C4" preload="auto" src="/audio/whitetuts/c4.wav"></audio>
//       <audio id="C44" preload="auto" src="/audio/blacktuts/c44.wav"></audio>
//       <audio id="D4" preload="auto" src="/audio/whitetuts/d4.wav"></audio>
//       <audio id="D44" preload="auto" src="/audio/blacktuts/d44.wav"></audio>
//       <audio id="E4" preload="auto" src="/audio/whitetuts/e4.wav"></audio>
//       <audio id="F4" preload="auto" src="/audio/whitetuts/f4.wav"></audio>
//       <audio id="F44" preload="auto" src="/audio/blacktuts/f44.wav"></audio>
//       <audio id="G4" preload="auto" src="/audio/whitetuts/g4.wav"></audio>
//       <audio id="G44" preload="auto" src="/audio/blacktuts/g44.wav"></audio>
//       <audio id="A4" preload="auto" src="/audio/whitetuts/a4.wav"></audio>
//       <audio id="A44" preload="auto" src="/audio/blacktuts/a44.wav"></audio>
//       <audio id="B4" preload="auto" src="/audio/whitetuts/b4.wav"></audio>
//       <audio id="C5" preload="auto" src="/audio/whitetuts/c5.wav"></audio>
//       <audio id="D5" preload="auto" src="/audio/whitetuts/d5.wav"></audio>
//     </div>

//     </div>
//   );
// };

// export default PianoKeys;

