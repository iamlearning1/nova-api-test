import { Score } from './User';

export class Users {
  findUser(email: string) {}

  saveUser(
    email: string,
    description: string,
    score: Score,
    referrer: string
  ): void {}

  verifyScore(id: string) {}

  rejectUser(email: string, referrerEmail: string) {}
}
