import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const publicPath = path.resolve('build', 'public');
app.use('/', express.static(publicPath, { maxAge: 31557600000 }));

app.use('/api', routes);

app.all('*', (req, res) => {
  res.status(405).send({ error: true, message: 'Method Not Allowed' });
});

const server = app.listen(3000);

server.timeout = 60000 * 5;
