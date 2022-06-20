export class BadRequest extends Error {
  constructor(message: string) {
    super(message);

    // Object.setPrototypeOf(this, BadRequest.prototype);

    this.name = 'BadRequest';
  }
}

export class NotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFound';
  }
}
