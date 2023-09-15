import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { clientStore } from '../share/store'
import router from '../share/routes'

ReactDom.hydrateRoot(
  document.getElementById('root'),
  <Provider store={clientStore}>
    <BrowserRouter>
      <Routes>
        {router?.map((item, index) => {
          return <Route {...item} key={index} />
        })}
      </Routes>
    </BrowserRouter>
  </Provider>
)
