import { createContainer, asClass, InjectionMode, asValue } from 'awilix';

import { MemoryUsers } from './repo/memory/users';
import { NominationService } from './nomination/service';
import { EmailService } from './email/service';
import { UsersService } from './users/service';
import logger from './logger';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  logger: asValue(logger),
  usersRepo: asClass(MemoryUsers).singleton(),
  nominationService: asClass(NominationService).singleton(),
  emailService: asClass(EmailService).singleton(),
  usersService: asClass(UsersService).singleton(),
});

export default container;
