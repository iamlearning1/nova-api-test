import container from '../../container';
import { Score, User } from '../../entity/User';
import { Users } from '../../entity/Users';
import { BadRequest, NotFound } from '../../errors';
import { fillUsersInMemory } from './utils';

export class MemoryUsers extends Users {
  users: User[];
  logger = container.resolve('logger');

  constructor() {
    super();

    this.users = [...fillUsersInMemory()];
  }

  findUser(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  saveUser(
    email: string,
    description: string,
    score: Score,
    referrer: string
  ): boolean {
    const user = this.findUser(email);

    this.logger.error(`User with email ${email} already exists in memory`);

    if (user) throw new BadRequest('Not accepted');

    const newUser = new User(email, description, score, referrer);

    this.logger.info(`User created with email ${newUser.email}`);

    this.users.push(newUser);

    return this.verifyScore(newUser.email);
  }

  verifyScore(email: string): boolean {
    const user = this.findUser(email);

    this.logger.error(`User with email ${email} not found in memory`);

    if (!user) throw new NotFound('Not found');

    const score = (user.score.community + user.score.talent) / 2;

    this.logger.info(`User with email ${email} score: ${score}`);

    return score < 8;
  }

  allUsers(): User[] {
    return this.users;
  }
}
