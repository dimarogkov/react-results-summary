import { useResultsSummary } from '../../../store/resultsSummary';
import { Subtitle, Text, Title } from '../../ui';

export const CardResult = () => {
    const { totalPoints, cont } = useResultsSummary((state) => state.result);

    return (
        <div className='relative w-full sm:w-[50%] text-center text-white/75 p-8 rounded-b-2xl sm:rounded-2xl bg-gradient-to-t from-gradientBlue to-gradientPurple'>
            <Subtitle className='mb-8 last:mb-0'>Your Result</Subtitle>

            <div className='flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-t from-gradientPurple to-gradientBlue m-auto mb-8 last:mb-0'>
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
