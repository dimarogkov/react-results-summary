export const getResult = (totalPoints: number) => {
    const result = { totalPoints, cont: { title: '', text: '' } };

    switch (true) {
        case totalPoints >= 1 && totalPoints < 25: {
            result.cont.title = 'Keep Trying';
            result.cont.text = 'You scored higher than 5% of the people who have taken these test.';
            break;
        }
        case totalPoints >= 25 && totalPoints < 50: {
            result.cont.title = 'Not Bad';
            result.cont.text = 'You scored higher than 25% of the people who have taken these test.';
            break;
        }
        case totalPoints >= 50 && totalPoints < 75: {
            result.cont.title = 'Good';
            result.cont.text = 'You scored higher than 45% of the people who have taken these test.';
            break;
        }
        default: {
            result.cont.title = 'Great';
            result.cont.text = 'You scored higher than 65% of the people who have taken these test.';
        }
    }

    return result;
};
