import { SummaryItem } from '../types/resultsSummary';

export const getTotalPoints = (items: SummaryItem[]) => {
    return Math.round(items.reduce((acc, item) => acc + item.summaryPoints, 0) / 4);
};
