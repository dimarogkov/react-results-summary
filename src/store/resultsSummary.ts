import { create } from 'zustand';
import { data } from '../data/data';
import { Result, ResultsSummary, SummaryItem } from '../types/resultsSummary';

interface ResultsSummaryStore extends ResultsSummary {
    updateSummaryItems: (items: SummaryItem[]) => void;
    updateResult: (newResult: Result) => void;
}

export const useResultsSummary = create<ResultsSummaryStore>((set) => ({
    result: data.result,
    summaryItems: data.summaryItems,
    updateResult: (newResult) => set({ result: newResult }),
    updateSummaryItems: (items) => {
        set({ summaryItems: items });
    },
}));
