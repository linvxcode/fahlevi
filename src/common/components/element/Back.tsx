import React,{ReactNode} from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import BackSvg from '../svg/BackSvg';
import clsxm from '@/common/libs/clsxm';

type BackProps = {
    href: string;
    children: ReactNode
    className: string
}

const Back = (props: BackProps) => {
    const {className, href, children} = props;
  return (
    <Button as={Link} href={href} variant='light' className={clsxm('px-0 group hover:lg:gap-3 hover:lg:transition-all hover:lg:duration-300', className) }>
    <BackSvg className='group-hover:lg:-rotate-12 lg:transition-all lg:duration-300' />
      {children}
    </Button>
  )
}

export default Back
