import mongoose from 'mongoose';

const NavbarSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  // 主题
  theme: {
    type: Boolean,
    required: true
  },
  // 搜索栏
  search: {
    type: Boolean,
    required: true
  },
  // 生活
  life: {
    type: Boolean,
    required: true
  },
  // 分类
  classify: {
    type: Boolean,
    required: true
  },
  // 留言板
  board: {
    type: Boolean,
    required: true
  },
  // 关于
  personal: {
    type: Boolean,
    required: true
  },
});

const Navbar = mongoose.model('navbar', NavbarSchema);
export default Navbar;