import { ErrorType } from './error-type.enum';
import { HandledError } from './handled-error';

export const defaultErrorHandler = (err: any): HandledError => {
    if (+err.code === 400) {
        return new HandledError(err.message, ErrorType.BadRequest, err?.errors);
    }

    if (+err.code === 401) {
        return new HandledError(err.message, ErrorType.Unauthorized);
    }

    if (+err.code === 403) {
        return new HandledError(err.message, ErrorType.Forbidden);
    }

    if (+err.code === 404) {
        return new HandledError(err.message, ErrorType.NotFound);
    }

    if (+err.code >= 500) {
        return new HandledError('Ошибка сервера', ErrorType.Failure);
    }

    return new HandledError(err?.message ?? 'Неизвестная ошибка', ErrorType.Unauthorized);
}