import mongoose from 'mongoose';

const dbConnect = () => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/myBlog')
      .then(() => {
        console.log('The Database Connection Succeeded!')
      })
      .catch(() => {
        console.log('The Database Connection Failed...')
      });
  } catch (error) {
    process.exit(1);
  }
}

export default dbConnect;