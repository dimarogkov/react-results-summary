import { Btn, Subtitle, Text, Title } from '../../ui';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Title className='mb-2 last:mb-0'>Home Page</Title>
                <Subtitle className='mb-2 last:mb-0'>Home Page</Subtitle>
                <Text className='mb-2 last:mb-0'>This is Home Page.</Text>
                <Btn>Continue</Btn>
            </div>
        </section>
    );
};
