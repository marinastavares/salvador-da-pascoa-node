const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dateStart = Date.now();

app.get('/', (req, res) => {
  const today = new Date();

  res.json({
    date: today,
    up: `${(Date.now() - dateStart) / 1000} seg.`
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log('Press CTRL +s C to quit');
})
