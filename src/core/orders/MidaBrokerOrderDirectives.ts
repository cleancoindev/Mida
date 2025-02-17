import { MidaBrokerOrderDirection } from "#orders/MidaBrokerOrderDirection";
import { MidaBrokerOrderPurpose } from "#orders/MidaBrokerOrderPurpose";
import { MidaBrokerPositionProtection } from "#positions/MidaBrokerPositionProtection";

export type MidaBrokerOrderOpenDirectives = {
    purpose: MidaBrokerOrderPurpose.OPEN;
    symbol: string;
    direction: MidaBrokerOrderDirection;
    volume: number;
    limit?: number;
    stop?: number;
    protection?: MidaBrokerPositionProtection;
} | {
    purpose: MidaBrokerOrderPurpose.OPEN;
    positionId: string;
    volume: number;
};

export type MidaBrokerOrderCloseDirectives = {
    purpose: MidaBrokerOrderPurpose.CLOSE;
    positionId: string;
    volume?: number;
};

export type MidaBrokerOrderDirectives = MidaBrokerOrderOpenDirectives | MidaBrokerOrderCloseDirectives;
