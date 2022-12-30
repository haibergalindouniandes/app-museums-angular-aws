export class Token {
  statusCode: number;
  message: string;
  token: string;

  constructor(
    statusCode: number,
    message: string,
    token: string
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.token = token;
  }
}
