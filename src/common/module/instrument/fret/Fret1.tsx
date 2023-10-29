import { Button } from '@nextui-org/react'
import React from 'react'

interface Fret1Props {
    pianoKeys: PianoKey[];
    handleClick: (note: string) => void;
}

interface PianoKey {
    note: string;
    label: string;
    type: string;
    className: string;
    src: string;
  }

const Fret1: React.FC<Fret1Props> = ({ pianoKeys, handleClick }) => { 
  return (
    <div>
      <div className="w-[60px] h-[210px] top-[-15px] border-r  border-[#000] absolute">
        {pianoKeys.map((key) => (
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
  )
}

export default Fret1
