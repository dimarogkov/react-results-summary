import cn from 'classnames';
import { SummaryItem as SummaryItemType } from '../../../types/resultsSummary';
import { Text } from '../../ui';

type Props = {
    summaryItem: SummaryItemType;
};

export const SummaryItem: React.FC<Props> = ({ summaryItem }) => {
    const { summaryPoints, name, icon } = summaryItem;

    return (
        <div
            className={cn('relative flex items-center justify-between w-full h-12 px-4 rounded-lg mb-4 last:mb-0', {
                'bg-[#ff5757]/10': name === 'Reaction',
                'bg-[#ffb01f]/10': name === 'Memory',
                'bg-[#00bd91]/10': name === 'Verbal',
                'bg-[#1125d4]/10': name === 'Visual',
            })}
        >
            <div className='flex items-center gap-2'>
                <div className='relative min-w-5'>
                    <img src={icon.src} alt={icon.alt} className='w-full' />
                </div>
                <Text
                    className={cn('font-semibold', {
                        'text-[#ff5757]': name === 'Reaction',
                        'text-[#ffb01f]': name === 'Memory',
                        'text-[#00bd91]': name === 'Verbal',
                        'text-[#1125d4]': name === 'Visual',
                    })}
                >
                    {name}
                </Text>
            </div>

            <div className='w-auto'>
                <Text className='font-semibold text-darkGray/60'>
                    <span className='text-darkGray'>{summaryPoints}</span> / 100
                </Text>
            </div>
        </div>
    );
};
