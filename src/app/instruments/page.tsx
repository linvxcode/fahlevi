import Instrument from "@/common/module/instrument";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Instrument - Fahlevi',
  description: 'Personal Website',
}

const Instruments = () => {
  return (
    <>
      <Instrument />
    </>
  );
};

export default Instruments;
