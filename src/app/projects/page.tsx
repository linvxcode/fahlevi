import Project from '@/common/module/project'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Projects - Fahlevi',
  description: 'Personal Website',
}

const Projects = () => {
  return (
    <div>
      <Project/>
    </div>
  )
}

export default Projects
