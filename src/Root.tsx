import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/pages/HomePage';

export const Root = () => {
    return (
        <Router basename='/react-results-summary'>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
};
