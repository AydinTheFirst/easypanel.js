export interface Certificate {
  domain: {
    main: string;
  };
}

export type ListCertificatesResponse = Certificate[];

export interface RemoveCertificateResponse {}
