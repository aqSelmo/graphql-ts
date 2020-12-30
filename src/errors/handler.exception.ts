export class CustomErrorException extends Error {
    constructor(message: string) {
        super(message);
    }
}
