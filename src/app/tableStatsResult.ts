import { LoDashImplicitNumberArrayWrapper } from "lodash";

export class TableStatsResult {

    eventData: EventData[];
    overallStats: OverallStats[];
    tableStats: TableStats[];

    constructor() {

    }
    // constructor(eventData: any, overallStats: any, perTableStats: any, allGuestsByTable: any) {
    //     this.eventData = eventData;
    //     this.overallStats = overallStats;
    //     this.perTableStats = perTableStats;
    //     this.allGuestsByTable = allGuestsByTable;
    // }

    test() {
        return this.eventData;
    }
}

export class EventData {
    name: string;
    location: string;
    event_date: Date;
}
export class OverallStats {
    approved: number;
    arrived: number;
    percentage: number;
}

export class TableStats {

    table_number: string;
    approved: boolean;
    arrived: boolean;
    percentage: number;
    guests: Guest[];

    constructor() {

    }
}

export class Guest {

    guest_id: number;
    event_id: number;
    name: string;
    table_number: string;
    num_guests: string;   //approved count
    new_num_guests: string;   //arrived count.
    new_table_number: string;  //NOT USED;
    new_arrival_time: string;
    new_handled_by: string;
    comments: string;
    phone: string;
    side: string;
    category: string;

    constructor() {

    }
}