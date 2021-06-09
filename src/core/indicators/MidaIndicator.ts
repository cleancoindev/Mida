import { MidaIndicatorParameters } from "#indicators/MidaIndicatorParameters";

export abstract class MidaIndicator {
    readonly #name: string;

    protected constructor ({ name, }: MidaIndicatorParameters) {
        this.#name = name;
    }

    public abstract calc (): Promise<any>;

    public abstract next (): Promise<any>;
}
