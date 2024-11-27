import { Priority } from "../enums/Priority";
import { Severity } from "../enums/Severity";
import { TicketEnvironment } from "./TicketEnvironment";
import { TicketFreq } from "../enums/TicketFreq";
import { TicketAdditional } from "./TicketAdditonal";

export interface Ticket {
    title: string,
    desc: string,
    steps: string,
    priority: Priority,
    severity: Severity,
    dateTime: Date,
    freq: TicketFreq,
    environment: TicketEnvironment
    additional: TicketAdditional | null,
}

