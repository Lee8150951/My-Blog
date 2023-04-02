import Above from '../models/Above.model';

const resolvers = {
  Query: {
    above: async () => {
      return Above.findOne();
    },
  },
};

export default resolvers;