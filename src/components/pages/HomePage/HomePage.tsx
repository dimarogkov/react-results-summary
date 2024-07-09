import { Card } from '../../elements/Card';
import { CardResult } from '../../elements/CardResult';
import { CardSummary } from '../../elements/CardSummary';

export const HomePage = () => {
    return (
        <Card>
            <CardResult />
            <CardSummary />
        </Card>
    );
};
