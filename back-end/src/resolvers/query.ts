import { IResolvers } from 'graphql-tools';
import { COLLECTIONS } from '../config/constants';

const query: IResolvers = {
  Query: {
    async users(_, __, { db }) {
      try {
        return {
          status: true,
          message: 'Users loaded successfully...',
          users: await db.collection(COLLECTIONS.USERS).find().toArray(),
        };
      } catch (e) {
        console.error(e);
        return {
          status: false,
          message: 'An error ocurred loading users...',
          users: [],
        };
      }
    },
  },
};

export default query;
