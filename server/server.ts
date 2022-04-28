import express from 'express';
import { Request, Response, NextFunction } from 'express';
import next from 'next';
import config from '../config'
import mongoose from 'mongoose';
import { loadControllers, scopePerRequest } from 'awilix-express';
import container, { IContextContainer } from './container';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { IIdentity, ROLE } from './constants'
import { PassportStatic } from 'passport'

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

server.use(bodyParser.json({ limit: '10mb' }));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json())
  server.use(acl);
  server.use(cookieSession({
    name: 'session',
    keys: [config.jwtSecret],
    maxAge: 312460601000, // 31 days
  }));

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

export const IGNORS = [
  '/favicon.ico',
  '/_next',
  '/static',
  '/sitemap.xml',
  '/robots.txt',
  '/service-worker.js',
  '/manifest.json',
  '/styles.chunk.css.map',
  '/__nextjs',
];


const acl = (req: any, res: Response, next: NextFunction) => {

  const path = req.url
  let useAcl = true;
  for (const item of IGNORS) {
    if (path.startsWith(item)) {
      useAcl = false;
    }
  }
  if (useAcl) {

    const passport = container.resolve<PassportStatic>('passport')

    passport.authenticate('jwt', (err, identity: IIdentity) => {
      console.log("Server authenticate")
      const isLogged = identity && identity.userId && identity.role !== ROLE.GUEST;
      if (!isLogged) {
        req.session.identity = identity;
      }

    }

    )
  } next()
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

