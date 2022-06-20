import { Score } from '../entity/User';

export class UserService {
  users: any;

  constructor({ users }: any) {
    this.users = users;
  }

  findUser(email: string) {
    return this.users.findUser(email);
  }

  saveUser(email: string, description: string, score: Score, referrer: string) {
    return this.users.saveUser(email, description, score, referrer);
  }
}
