import { MemoryUsers } from '../repo/memory/users';
import { User } from '../entity/User';
import { Unauthorized } from '../errors';

export class UsersService {
  usersRepo: MemoryUsers;

  constructor({ usersRepo }: { usersRepo: MemoryUsers }) {
    this.usersRepo = usersRepo;
  }

  findUser(email: string) {
    return this.usersRepo.findUser(email);
  }

  allUsers(user: User) {
    if (!user.admin) throw new Unauthorized('Unauthorized');

    return this.usersRepo.allUsers();
  }
}
