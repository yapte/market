import { ErrorType } from './error-type.enum';

export class HandledError {
    constructor(
        public message: string,
        public errorType: ErrorType,
        public errorMap?: Record<string, string>,
    ) { }
}