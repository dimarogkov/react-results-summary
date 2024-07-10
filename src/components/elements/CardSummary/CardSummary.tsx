import { useResultsSummary } from '../../../store/resultsSummary';
import { getRandomPoints } from '../../../helpers/getRandomPoints';
import { getTotalPoints } from '../../../helpers/getTotalPoints';
import { SummaryItem as SummaryItemType } from '../../../types/resultsSummary';

import { SummaryItem } from '../SummaryItem';
import { Btn, Subtitle } from '../../ui';
import { getResult } from '../../../helpers/getResult';

export const CardSummary = () => {
    const { summaryItems, updateSummaryItems, updateResult } = useResultsSummary((state) => state);

    const createResult = (items: SummaryItemType[]) => {
        const totalPoints = getTotalPoints(items);
        const newResult = getResult(totalPoints);

        updateResult(newResult);
    };

    const changeSummary = () => {
        const newItems = [...summaryItems].map((summaryItem) => {
            const newPoints = getRandomPoints();

            return { ...summaryItem, summaryPoints: newPoints };
        });

        updateSummaryItems(newItems);
        createResult(newItems);
    };

    return (
        <div className='w-full sm:w-[50%] p-5 md:p-8'>
            <Subtitle className='text-darkGray mb-5 last:mb-0'>Summary</Subtitle>

            <div className='w-full mb-8 last:mb-0'>
                {summaryItems.map((summaryItem) => (
                    <SummaryItem summaryItem={summaryItem} key={summaryItem.id} />
                ))}
            </div>

            <Btn onClick={changeSummary}>Change Summary</Btn>
        </div>
    );
};
