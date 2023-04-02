import mongoose from 'mongoose';

const AboveSchema = new mongoose.Schema({
  // 标题
  title: {
    type: String,
    required: true
  },
  // 副标题
  subtitle: {
    type: String,
    required: true
  },
  // 头像
  avatar: {
    type: String,
    required: true
  },
  // 背景图
  background: {
    type: String,
    required: true
  }
});

const Above = mongoose.model('above', AboveSchema);
export default Above;