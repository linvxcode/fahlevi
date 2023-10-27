import InstrumentDetail from "@/common/module/instrument/component/InstrumentDetail";
import Guitar from "@/common/module/instrument/layout/Guitar";

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
