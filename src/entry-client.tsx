import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from '@components';
import { routes } from '@shared/const/route';
import { getClientStore } from './store';
import './index.less';

const store = getClientStore();
hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <Layout routes={routes} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
