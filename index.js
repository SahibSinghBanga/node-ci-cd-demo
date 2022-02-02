const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello From Root URL")
})

app.listen(port, () => {
  console.log(`App is running at port http://localhost:${port}`);
})