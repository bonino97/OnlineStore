import { IResolvers } from 'graphql-tools';
import { COLLECTIONS } from '../config/constants';

const mutation: IResolvers = {
  Mutation: {
    async register(_, { user }, { db }, info) {
      const userExist = await db
        .collection(COLLECTIONS.USERS)
        .findOne({ email: user.email });

      if (userExist) {
        return null;
      }

      user.id = await generateUserId(db);
      user.registerDate = new Date().toISOString();
      return await db
        .collection(COLLECTIONS.USERS)
        .insertOne(user)
        .then(async () => user)
        .catch((err: Error) => {
          console.error(err.message);
          return null;
        });
    },
  },
};

export default mutation;

// tslint:disable-next-line: no-any
async function generateUserId(db: any) {
  const lastUser = await db
    .collection(COLLECTIONS.USERS)
    .find()
    .limit(1)
    .sort({ registerDate: -1 })
    .toArray();

  let id = 0;
  lastUser.length === 0 ? (id += 1) : (id = lastUser[0].id + 1);
  return id;
}
