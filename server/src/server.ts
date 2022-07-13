const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const app = require('./app');

const port = +process.env.PORT! || 8000
console.log(process.env.PORT);

app.listen(port, () => console.log(`App listening on port ${port}`))