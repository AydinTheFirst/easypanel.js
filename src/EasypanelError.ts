export class EasypanelError extends Error {
  code: number;
  data: {
    code: string;
    httpStatus: number;
    path: string;
    zodErrors: string[] | null;
  };
  private raw: any;
  constructor(message: string, payload: any) {
    super(message);
    this.name = "EasypanelError";

    this.code = payload.code;
    this.data = payload.data;

    this.stack = new Error().stack;

    this.raw = payload;
  }

  get rawError() {
    return this.raw;
  }
}
