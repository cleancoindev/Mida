import { MidaErrorParameters } from "#errors/MidaErrorParameters";
import { GenericObject } from "#utilities/GenericObject";

export class MidaError extends Error {
    readonly #type: string;
    readonly #descriptor: GenericObject;

    public constructor ({
        type,
        message,
        descriptor = {},
    }: MidaErrorParameters) {
        super(message);

        this.name = "MidaError"; // Don't use "this.constructor.name": minified code will break it.
        this.#type = type;
        this.#descriptor = { ...descriptor, };
    }

    public get type (): string {
        return this.#type;
    }

    public get descriptor (): GenericObject {
        return { ...this.#descriptor, };
    }

    public override toString (): string {
        return "";
    }
}
