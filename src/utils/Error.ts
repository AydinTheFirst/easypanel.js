export class EasypanelError extends Error {
  constructor(error: IEasypanelError) {
    super("Easypanel Error");
    this.code = error.code;
    this.data = error.data;
  }
  code: string;
  data: {
    code: string;
    httpStatus: number;
    path: string;
    zodErrors: any[];
  };
}

export interface IEasypanelError {
  message: string;
  code: string;
  data: {
    code: string;
    httpStatus: number;
    path: string;
    zodErrors: any[];
  };
}
