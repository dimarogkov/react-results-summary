import cn from 'classnames';
import { useResultsSummary } from '../../../store/resultsSummary';
import { Subtitle, Text, Title } from '../../ui';

export const CardResult = () => {
    const { totalPoints, cont } = useResultsSummary((state) => state.result);

    return (
        <div
            className={cn(
                'relative w-full sm:w-[50%] text-center text-white/75 p-8 rounded-xl sm:rounded-2xl bg-gradient-to-t',
                {
                    'from-gray-500 to-slate-300': totalPoints >= 1 && totalPoints < 25,
                    'from-orange-600 to-amber-500': totalPoints >= 25 && totalPoints < 50,
                    'from-teal-600 to-green-500': totalPoints >= 50 && totalPoints < 75,
                    'from-violet-600 to-blue-500': totalPoints >= 75,
                }
            )}
        >
            <Subtitle className='mb-8 last:mb-0'>Your Result</Subtitle>

            <div
                className={cn(
                    'flex items-center justify-center w-44 h-44 rounded-full bg-gradient-to-t shadow-md m-auto mb-8 last:mb-0',
                    {
                        'from-slate-300 to-gray-500': totalPoints >= 1 && totalPoints < 25,
                        'from-amber-500 to-orange-600': totalPoints >= 25 && totalPoints < 50,
                        'from-green-500 to-teal-600': totalPoints >= 50 && totalPoints < 75,
                        'from-blue-500 to-violet-600': totalPoints >= 75,
                    }
                )}
            >
                <div className='w-full'>
                    <p className='w-full font-bold text-6xl text-white'>{totalPoints}</p>
                    <span className='text-white/55'>of 100</span>
                </div>
            </div>

            <div className='w-full'>
                <Title className='text-white mb-3 last:mb-0'>{cont.title}</Title>
                <Text>{cont.text}</Text>
            </div>
        </div>
    );
};
