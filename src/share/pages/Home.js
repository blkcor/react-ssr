import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>简易的服务器端渲染 - HOME</title>
        <meta name="description" content="服务器端渲染"></meta>
      </Helmet>
      <div>
        Home Works
        <hr />
        <Link to={'/about'}>to about</Link>
      </div>
    </Fragment>
  )
}
export default Home
