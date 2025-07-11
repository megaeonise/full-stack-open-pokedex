require('dotenv').config()
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
// this_causes_error
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('6') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')
  res.send('ok')
})