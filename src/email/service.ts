import container from '../container';

export class EmailService {
  private logger = container.resolve('logger');

  send(userEmail: string, referrerEmail: string) {
    this.logger.info(`Sending rejection email to user ${userEmail}`);

    this.logger.info(
      `Sending email to referrer with the reason "Score too low", ${referrerEmail}`
    );
  }
}
