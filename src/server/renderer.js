import React from 'react'
import { renderToString } from 'react-dom/server'
import { Route, Routes, matchRoutes } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import router from '../share/routes'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { serverStore } from '../share/store'

export default (req, res) => {
  const routeMap = new Map() // path - loaddata 的map
  router.forEach((item) => {
    if (item.path && item.loadData) {
      routeMap.set(item.path, item.loadData(serverStore, 'hello'))
    }
  })
  //匹配当前路由
  const matchedRoutes = matchRoutes(router, req.path)

  const promises = []
  matchedRoutes?.forEach((item) => {
    //如果当前路由下有loadData方法，就执行
    if (routeMap.has(item.pathname)) {
      promises.push(routeMap.get(item.pathname))
    }
  })

  Promise.all(promises).then((data) => {
    const helmet = Helmet.renderStatic()

    let html = renderToString(
      <Provider store={serverStore}>
        <StaticRouter location={req.path}>
          <Routes>
            {router?.map((item, index) => {
              return <Route {...item} key={index} />
            })}
          </Routes>
        </StaticRouter>
      </Provider>
    )
    res.send(`
      <html
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
          window.context = {
            state: ${JSON.stringify(serverStore.getState())}
          }
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `)
  })
}
