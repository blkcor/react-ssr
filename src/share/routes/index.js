import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
    loadData: About.getInitProps,
  },
]

export default router
