// pages/instruments.tsx

import HeadInstruments from './HeadInstruments';
import { retriveData } from '@/common/libs/firebase/service';

export interface InstrumentData {
  id: string;
  title: string;
  slug: string;
  img: string;
  new: string;
}

export interface InstrumentsPageProps {
  data: InstrumentData[];
}

export async function getServerSideProps() {
  const data = await retriveData('instruments');

  return {
    props: {
      data,
    },
  };
}

export default function InstrumentsPage({ data }: InstrumentsPageProps) {
  return (
    <div>
      <HeadInstruments data={data} view='grid' />
    </div>
  );
}
