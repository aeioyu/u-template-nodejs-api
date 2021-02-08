import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import morgan from 'morgan';
import compression from 'compression';
import routes from './routes';

const app = express();
app.use(compression());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => res.json({ message: 'hello !' }));
app.use('/api', routes);

const publicPath = path.resolve('public');
app.use('/', express.static(publicPath, { maxAge: 31557600000 }));

app.all('*', (req, res) => {
  res.status(405).send({ error: true, message: 'Method Not Allowed' });
});

const server = app.listen(3000, () => {
  const serverAddress = server.address();
  // eslint-disable-next-line no-console
  console.log(`Server start at port ${serverAddress.port}`);
});

server.timeout = 60000 * 5;
