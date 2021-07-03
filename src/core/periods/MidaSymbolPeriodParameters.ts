import { MidaSymbolPrice } from "#symbols/MidaSymbolPriceType";
import { MidaSymbolTick } from "#ticks/MidaSymbolTick";

// Represents the parameters of the symbol period constructor.
export type MidaSymbolPeriodParameters = {
    symbol: string;
    startTime: Date;
    priceType: MidaSymbolPrice;
    open: number;
    close: number;
    low: number;
    high: number;
    volume: number;
    timeframe: number;
    ticks?: MidaSymbolTick[];
};
