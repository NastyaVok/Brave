import MainPage from '../containers/MainPage/MainPage';
import PaymentPage from '../containers/PaymentPage';

const routesConfig = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/PaymentPage',
        element: <PaymentPage />,
    },
];

export default routesConfig;