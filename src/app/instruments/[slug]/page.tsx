import { retriveData } from "@/common/libs/firebase/service";
import InstrumentDetail from "@/common/module/instrument/component/InstrumentDetail";
import Guitar from "@/common/module/instrument/layout/Guitar";
import { Metadata } from "next";

interface instrumentProps {
  params: { slug: string };
}

const page = ({ params }: instrumentProps) => {
   const { slug } = params;

  if (slug === "piano") {
    return <InstrumentDetail params={{ slug }} />;
  } else if (slug === "guitar") {
    return <Guitar params={{ slug }} />;
  } else {
    return <div>Not Found</div>;
  }
};

export default page;


type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = params.slug;
  const data = await retriveData("instruments");
  const instrument = data.find((item: any) => item.slug === slug);

  return {
    title:  instrument?.title + ' - ' + 'Fahlevi',
    description: instrument?.desc
  };
}
