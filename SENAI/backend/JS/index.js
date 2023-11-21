import express from 'express';
import Connection from './database.js'


const server = express()
server.listen(3000, console.log('rodando à 3 mil por hora'))

try {
    await Connection.authenticate();
    console.log('rodando 3 mil por ora');
  } catch (error) {
    console.error(error);
  }