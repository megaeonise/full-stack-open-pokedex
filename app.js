const express = require('express')
const app = express()

// get the port from env variable
// eslint-disable-next-line
console.log(process.env)
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
