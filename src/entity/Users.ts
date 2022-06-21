import { Score, User } from './User';

export class Users {
  findUser(email: string) {}

  saveUser(
    email: string,
    description: string,
    score: Score,
    referrer: string
  ) {}

  verifyScore(id: string) {}

  allUsers(user: User) {}
}
