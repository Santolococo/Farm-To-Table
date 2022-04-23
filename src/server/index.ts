/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

// Import Dependencies
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const axios = require('axios');

// Import database and models
require('./db/database.ts');
require('./middleware/auth');
import {Farms, Roles, Events, Orders, DeliveryZones, Products, RSVP, Subscriptions, Users, Vendors} from './db/models';

// Needs to stay until used elsewhere (initializing models)
console.log(Farms, Roles, Events, Orders, DeliveryZones,Products, RSVP, Subscriptions, Users, Vendors);

dotenv.config();

const app: Express = express();
const port = process.env.LOCAL_PORT;

const dist = path.resolve(__dirname, '..', '..', 'dist');
console.log('LINE 37 || INDEX.TSX', __dirname);

app.use(express.json());
app.use(express.static(dist));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Bumpkin Box",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

const successLoginUrl = 'http://localhost:5555/#/';
const errorLoginUrl = 'http://localhost:5555/login/error';

// Auth Routes
app.get(
  '/login/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureMessage: 'cannot login to Google',
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
  }),
  (req, res) => {
    console.log('User: ', req.user);
    res.send('thank you for signing in!');
  }
);

// app.get("/profile",(req, res) => {
//   Users.findOne()
//     .then((data: any) => {
//       console.log('data', data);
//       res.send(data).status(200);
//     })
//     .catch((err: Error) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });



// *** KEEP AT BOTTOM OF GET REQUESTS ***
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(dist, 'index.html'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
