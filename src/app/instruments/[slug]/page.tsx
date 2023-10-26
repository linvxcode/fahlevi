import InstrumentDetail from "@/common/module/instrument/component/InstrumentDetail"

interface instrumentProps {
  params: {slug: string}
}

const  page = ({params}: instrumentProps) => {
  const {slug} = params;

  return (
    <>
    <InstrumentDetail params={{slug}}/>
    </>
  )
}

export default page