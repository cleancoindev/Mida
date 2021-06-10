import { MidaError } from "#errors/MidaError";

export abstract class MidaIndicator {
    protected constructor () {
        // Silence is golden.
    }

    public abstract calc (...parameters: any[]): Promise<any>;

    public abstract next (...parameters: any[]): Promise<any>;

    static readonly #installedIndicators: Map<string, typeof MidaIndicator> = new Map();

    public static get installedIndicators (): string[] {
        return [ ...MidaIndicator.#installedIndicators.keys(), ];
    }

    public static add (name: string, indicatorConstructor: typeof MidaIndicator): void {
        if (MidaIndicator.#installedIndicators.has(name)) {
            // @ts-ignore
            throw new MidaError();
        }

        MidaIndicator.#installedIndicators.set(name, indicatorConstructor);
    }

    public static create (name: string): MidaIndicator {
        const indicatorConstructor: any | undefined = MidaIndicator.#installedIndicators.get(name);

        if (!indicatorConstructor) {
            // @ts-ignore
            throw new MidaError();
        }

        return new indicatorConstructor();
    }
}
