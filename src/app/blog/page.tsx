import BlogPage from '@/common/module/blog'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog - Fahlevi',
  description: 'Personal Website',
}

const Blog = () => {
  return (
    <div>
      <BlogPage  />
    </div>
  )
}

export default Blog
