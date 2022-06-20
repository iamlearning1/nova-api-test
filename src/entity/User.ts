export interface Score {
  community: number;
  talent: number;
}

export class User {
  email: string;
  description: string;
  referrer: string;
  score: Score;
  admin: boolean;

  constructor(
    email: string,
    description: string,
    score: Score,
    referrer: string
  ) {
    this.email = email;
    this.description = description;
    this.score = score;
    this.referrer = referrer;
    this.admin = false;
  }

  makeAdmin() {
    this.admin = true;
  }
}
