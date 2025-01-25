export interface CustomErrorType extends Error {
    statusCode?: number;
    error?: string;
  }
  