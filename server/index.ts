import { createServer } from 'http'
import { parse } from 'url'
import {} from 'querystring'

const server = createServer()
server.on('request', (req, res) => {
  const { method } = req
  if (method !== 'GET') {
    res.end('service error')
  }
  const { pathname, query } = parse(req?.url || '/')
  if (pathname?.startsWith('/translate')) {
    if (query) {
      const r = query?.split('=')
      res.end(`${r[1]}的翻译结果: 111`)
    } else {
      res.end('ni need input a word to translate')
    }
  } else {
    res.end('service error')
  }
})
server.listen(3000)
