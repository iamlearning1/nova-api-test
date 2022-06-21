import { EmailService } from '../email/service';
import { MemoryUsers } from '../repo/memory/users';
import { Score } from '../entity/User';

export class NominationService {
  usersRepo: MemoryUsers;
  emailService: EmailService;

  constructor({
    usersRepo,
    emailService,
  }: {
    usersRepo: MemoryUsers;
    emailService: EmailService;
  }) {
    this.usersRepo = usersRepo;
    this.emailService = emailService;
  }

  saveUser(email: string, description: string, score: Score, referrer: string) {
    const rejected = this.usersRepo.saveUser(
      email,
      description,
      score,
      referrer
    );

    if (rejected) this.emailService.send(email, referrer);
  }
}
