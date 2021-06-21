import { IResolvers } from 'graphql-tools';
import { COLLECTIONS } from '../config/constants';
import JWT from '../lib/jwt';

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
    async login(_, { email, password }, { db }) {
      try {
        const user = await db
          .collection(COLLECTIONS.USERS)
          .findOne({ email, password });

        if (!user) {
          return {
            status: false,
            message: 'Incorrect user or password...',
            user: null,
          };
        }
        
        delete user.password;
        const jwt = new JWT();

        return {
          status: true,
          message: 'User logged in successfully...',
          token: jwt.sign({ user }),
        };
      } catch (e) {
        console.error(e);
        return {
          status: false,
          message: 'An error ocurred when user login...',
          token: null,
        };
      }
    },
  },
};

export default query;
