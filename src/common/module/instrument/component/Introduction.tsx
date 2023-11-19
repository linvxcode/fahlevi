"use client";
import React, { useEffect } from "react";
import { Boarding } from "boarding.js";
import "boarding.js/styles/main.css";
import "boarding.js/styles/themes/basic.css";

function Introduction() {
  const onBoardingPianoShown = localStorage.getItem('onBoardingPianoShown');
  useEffect(() => {
    if(!onBoardingPianoShown){

    
    const boarding = new Boarding({
      opacity: 0.50
    });
    boarding.defineSteps([
      {
        element: ".Piano",
        popover: {
          title: "Piano Guide",
          description:
            "to use the virtual piano can use the keyboard from A to L  And Z to M",
        },
      },
      {
        element: '.keyc',
        popover: {
          title: "Key",
          description: "Click With Mouse or Click With Keyboard"
        }
      }
    ]);
    boarding.start();

  }
    localStorage.setItem('onBoardingPianoShown', 'true');
  }, [onBoardingPianoShown]);

  return <div />;
}

export default Introduction;
