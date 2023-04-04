import Navbar from '../models/Navbar.model';

const resolvers = {
  Query: {
    navbar: async () => {
      return Navbar.findOne();
    },
  },
};

export default resolvers;