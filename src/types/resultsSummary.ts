export interface Result {
    totalPoints: number;
    cont: {
        title: string;
        text: string;
    };
}

export interface SummaryItemIcon {
    src: string;
    alt: string;
}

export interface SummaryItem {
    id: number;
    summaryPoints: number;
    name: string;
    icon: SummaryItemIcon;
}

export interface ResultsSummary {
    result: Result;
    summaryItems: SummaryItem[];
}
