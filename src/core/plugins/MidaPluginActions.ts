import { MidaBroker } from "#brokers/MidaBroker";
import { MidaIndicator } from "#indicators/MidaIndicator";

export type MidaPluginActions = {
    addBroker (broker: MidaBroker): void;
    addIndicator (name: string, indicatorConstructor: typeof MidaIndicator): void;
};
