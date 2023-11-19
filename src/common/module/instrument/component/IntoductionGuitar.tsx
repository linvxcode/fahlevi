"use client";
import React, { useEffect } from "react";
import { Boarding } from "boarding.js";
import "boarding.js/styles/main.css";
import "boarding.js/styles/themes/basic.css";

function IntroductionGuitar() {
  const onboardingShown = localStorage.getItem("onboardingShown");
  
  useEffect(() => {
    if (!onboardingShown) {
      const boarding = new Boarding({
        opacity: 0.50
      });
      boarding.defineSteps([
        {
          element: ".guitar",
          popover: {
            title: "Piano Guide",
            description:
              "There are still several keys that have not been filled in and will be filled soon because they are still in the development stage",
          },
        },
        {
          element: '.fret1',
          popover: {
            title: "Fret",
            description: "Click With Mouse to play guitar"
          }
        }
      ]);
      boarding.start();

      localStorage.setItem("onboardingShown", "true");
    }
  }, [onboardingShown]);

  return <div />;
}

export default IntroductionGuitar;
