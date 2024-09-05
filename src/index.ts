import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.use('*', (c, next) => {
  console.log('Request:', c.req.url)
  return next()
})

app.get('/', (c) => c.text('We up!'))

serve(app)
