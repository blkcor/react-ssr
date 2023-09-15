import app from './http'
import renderer from './renderer'
// 启一个post服务
app.post('/api/getDemoData', (req, res) => {
  res.send({
    data: req.body,
    status_code: 0,
  })
})

app.get('*', (req, res) => {
  renderer(req, res)
})
