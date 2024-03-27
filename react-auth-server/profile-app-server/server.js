const cors = require('cors');
const dotenv = require ('dotenv');
dotenv.config();
const { fileURLToPath } = require ('url');
const express = require ('express');
const productRouter = require ('./routes/product.routes.js');
const userRouter = require ('./routes/user.routes.js');
const orderRouter = require ('./routes/order.routes.js');

// const { dbconnect } = require ('./config/database.config.js');
const path = require ('path');
// dbconnect();
const connectdb = require ('./config/db')
connectdb()
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
// app.use(
//   cors({
//     credentials: true,
//     origin: ['http://localhost:3000'],
//   })
// );
app.use(cors())
app.use('/api/product', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder));

app.get('*', (req, res) => {
  const indexFilePath = path.join(publicFolder, 'index.html');
  res.sendFile(indexFilePath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});

