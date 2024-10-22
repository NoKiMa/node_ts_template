import express, {Express, Request, Response, Application} from 'express';
import dotenv from 'dotenv';
import router from './router';
// import mongoose from 'mongoose'
// import fileUpload from 'express-fileupload' // NEED yarn add express-fileupload

//For env File
dotenv.config();
const port = process.env.PORT || 8000;
// const DB_URL = 'DB_URL'
const app: Application = express();
app.use(express.json());
// app.use(fileUpload({}))
// app.use(express.static('static'))
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server!!!');
});

const startApp = async () => {
  try {
    // await mongoose.connect(DB_URL)
    app.listen(port, () => {
      console.log(`Server is Fire at http://localhost:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};
startApp();
