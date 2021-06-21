import { SECRET_KEY, MESSAGES, EXPIRE_TIME } from '../config/constants';
import jwt from 'jsonwebtoken';
import { IJwt } from '../interfaces/jwt';

class JWT {
  private secretKey = SECRET_KEY as string;

  sign(data: IJwt) {
    return jwt.sign({ user: data.user }, this.secretKey, {
      expiresIn: EXPIRE_TIME.DAY,
    });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, this.secretKey) as string;
    } catch (e) {
      return MESSAGES.VERIFY_TOKEN_FAILED;
    }
  }
}

export default JWT;
