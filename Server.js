const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('server stared at port 3000');
});

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.post('/api/cars', (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send('Car Submitted successfully.');
});
