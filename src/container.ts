import { createContainer, asClass, InjectionMode, asValue } from 'awilix';

import { MemoryUsers } from './repo/memory/users';
import { UserService } from './nomination/service';
import logger from './logger';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  logger: asValue(logger),
  users: asClass(MemoryUsers).singleton(),
  userService: asClass(UserService).singleton(),
});

export default container;
