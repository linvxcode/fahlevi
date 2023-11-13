import { Snippet } from '@nextui-org/react'
import React from 'react'

const Code = () => {
  return (
    <div className="flex flex-row flex-wrap">
    <Snippet
      size="lg"
      symbol={false}
      className="mt-2 flex flex-row flex-wrap w-full overflow-scroll"

    >
      <span>{`<motion.div`}</span>
      <span>
        {`
      initial={{ opacity: 0, translateY: 100 }}
      `}
      </span>
      <span>
        {`
      whileInView={{ opacity: 1, translateY: 0, transition: {type: "spring" , duration: 1} }}
      `}
      </span>
      <span>
        {`
        viewport={{ once: true }}>
      `}
      </span>
      <span>
        {`
        <h1>Your Text</h1>  
      `}
      </span>
      <span>
        {`
        </motion.div>
      `}
      </span>
    </Snippet>
  </div>
  )
}

export default Code
