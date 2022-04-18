import express from 'express';
import { Request, Response, NextFunction } from 'express';
import next from 'next';
import config from '../config'
import mongoose from 'mongoose';
import { loadControllers, scopePerRequest } from 'awilix-express';
import container, { IContextContainer } from './container';

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



const startDataBase = async () => {
  console.info('Starting application');
  let connectionString: mongoose.Connection = null;
  try {
    console.info('Initializing database ...');
    connectionString = connectToMongoDb(config.mongo.uri, config.mongo.options);
  } catch (e) {
  }
}

app.prepare().then(() => {
  const server = express()

  server.use(responses);
  server.use(scopePerRequest(container));
  const files = 'controllers/**/*.ts';
  server.use(loadControllers(files, { cwd: __dirname }));

  server.all('*', (req, res) => {
    return handle(req, res)
  })



  startDataBase()
  
  server.listen(config.port, () => {
    console.log(`> Ready on http://localhost:${config.port}`)
  })



})

const responses = (req: Request, res: Response, next: NextFunction) => {
  res.answer = (
    data: any,
    message: any = null,
    status: number = 200,
  ) => {

    return res.status(status).json({
      data,
      message
    });
  };
  next()
}

const connectToMongoDb = (uri: string, options:any) => {
  mongoose.connect(uri, options);
  
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  mongoose.connection.once('open', function () {
    console.info('MongoDB is connected');
  });

  return mongoose.connection;
}

