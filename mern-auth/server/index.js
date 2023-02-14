require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')



const connectDB = require('./mongodb/connect')
const loginRouter = require('./routers/loginRoutes')
const sessionObj = require('./session')

const app = express()
const port = process.env.PORT || 5001;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//session intergration
app.use( session(sessionObj));


app.use(cors(corsOptions))
app.use(express.json())

// ROUTERS
app.use('/api', loginRouter)



//Start Server
const startServer = async ()=>{
  try {
      connectDB(process.env.MONGODB_URL);
      app.listen(port, ()=> console.log('Server running on port ',port));
  } catch (error) {
      console.log(error);
  }

}
startServer();

module.exports = app

