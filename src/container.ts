import { createContainer, asClass, InjectionMode, asValue } from 'awilix';

import { MemoryUsers } from './repo/memory/users';
import { UserService } from './nomination/service';
import { EmailService } from './email/service';
import logger from './logger';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  logger: asValue(logger),
  usersRepo: asClass(MemoryUsers).singleton(),
  userService: asClass(UserService).singleton(),
  emailService: asClass(EmailService).singleton(),
});

export default container;
