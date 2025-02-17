import { MidaDate } from "#dates/MidaDate";
import { MidaSymbolQuotation } from "#quotations/MidaSymbolQuotation";
import { MidaSymbolTick } from "#ticks/MidaSymbolTick";

/** The parameters of the symbol tick constructor. */
export type MidaSymbolTickParameters = {
    symbol?: string;
    bid?: number;
    ask?: number;
    date?: MidaDate;
    quotation?: MidaSymbolQuotation;
    previousTick?: MidaSymbolTick;
    nextTick?: MidaSymbolTick;
};
