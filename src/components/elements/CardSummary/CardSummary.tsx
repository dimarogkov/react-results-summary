import { useResultsSummary } from '../../../store/resultsSummary';
import { Btn, Subtitle } from '../../ui';
import { SummaryItem } from '../SummaryItem';

export const CardSummary = () => {
    const summaryItems = useResultsSummary((state) => state.summaryItems);

    return (
        <div className='w-full sm:w-[50%] p-5 md:p-8'>
            <Subtitle className='text-darkGray mb-5 last:mb-0'>Summary</Subtitle>

            <div className='w-full mb-8 last:mb-0'>
                {summaryItems.map((summaryItem) => (
                    <SummaryItem summaryItem={summaryItem} key={summaryItem.id} />
                ))}
            </div>

            <Btn>Change</Btn>
        </div>
    );
};
