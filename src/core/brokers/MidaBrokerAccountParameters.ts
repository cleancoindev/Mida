import { MidaBroker } from "#brokers/MidaBroker";
import { MidaBrokerAccount } from "#brokers/MidaBrokerAccount";
import { MidaBrokerAccountOperativity } from "#brokers/MidaBrokerAccountOperativity";
import { MidaBrokerAccountPositionAccounting } from "#brokers/MidaBrokerAccountPositionAccounting";
import { MidaDate } from "#dates/MidaDate";

/**
 * The broker account constructor parameters.
 * @see MidaBrokerAccount
 */
export type MidaBrokerAccountParameters = {
    /** The account id. */
    id: string;
    /** The account broker. */
    broker: MidaBroker;
    /** The account creation date. */
    creationDate: MidaDate;
    /** The account owner name. */
    ownerName: string;
    /** The account currency ISO code. */
    currencyIso: string;
    /** The account currency digits. */
    currencyDigits: number;
    /** The account operativity (demo or real). */
    operativity: MidaBrokerAccountOperativity;
    /** The account position accounting (hedged or netted). */
    positionAccounting: MidaBrokerAccountPositionAccounting;
    /** The account indicative leverage. */
    indicativeLeverage: number;
};
