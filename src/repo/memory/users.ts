import container from '../../container';
import { Score, User } from '../../entity/User';
import { Users } from '../../entity/Users';
import { BadRequest, NotFound } from '../../errors';

const normalUser = new User(
  'testuser@test.com',
  '5 Years experience in Full Stack Development',
  { community: 8, talent: 8 },
  'admin@test.com'
);

const adminUser = new User(
  'admin@test.com',
  'Admin User',
  {
    community: 9,
    talent: 9,
  },
  'admin@test.com'
);

adminUser.makeAdmin();

export class MemoryUsers extends Users {
  users: User[];
  logger = container.resolve('logger');

  constructor() {
    super();

    this.users = [normalUser, adminUser];
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
}
