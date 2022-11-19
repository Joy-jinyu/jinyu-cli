import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { matchRoutes, RouteMatch } from 'react-router-dom';
import { Layout } from '@components';
import { Provider } from 'react-redux';
import { updateRoute } from './store/features/main';
import { getServerStore } from './store';
import { routes } from './shared/const/route';
import './index.less';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
interface ContextType {
    preloadedState?: string;
    status?: number;
}

function updateContext(
    context: ContextType,
    routeMatch: RouteMatch[] | null,
    store: any
) {
    context.status = routeMatch ? 200 : 400;
    context.preloadedState = store.getState();
}

async function getServerData(
    routeMatch: RouteMatch[] | null,
    dispatch: Dispatch<AnyAction>
) {
    if (routeMatch) {
        const { route, params, pathname } = routeMatch[routeMatch.length - 1];
        dispatch(updateRoute({ params, pathname }));
        const { PageComponent } = route as any;
        const getInitialProps = PageComponent?.getInitialProps;
        if (getInitialProps) {
            await Promise.all(
                getInitialProps().map((action: any) => dispatch(action))
            );
        }
    }
    return null;
}

export async function render(url: string, context: ContextType) {
    const routeMatch = matchRoutes(routes, url);
    const store = getServerStore();
    await getServerData(routeMatch, store.dispatch);
    updateContext(context, routeMatch, store);

    return ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <Provider store={store}>
                <Layout routes={routes} />
            </Provider>
        </StaticRouter>
    );
}
