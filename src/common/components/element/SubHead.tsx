import React from 'react'

type SubheadProps = {
    title: string;
    className: string;
}

const SubHead = ({title, className = ''}: SubheadProps ) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-between lg:items-center gap-2  ${className}`}>
      <h1 className='text-neutral-600 dark:text-neutral-400 '>
        {title}
      </h1>
    </div>
  )
}

export default SubHead
