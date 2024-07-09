import { create } from 'zustand';
import { data } from '../data/data';
import { ResultsSummary } from '../types/resultsSummary';

export const useResultsSummary = create<ResultsSummary>(() => ({
    result: data.result,
    summaryItems: data.summaryItems,
}));
