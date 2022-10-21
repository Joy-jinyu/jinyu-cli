import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { matchRoutes, RouteMatch } from 'react-router-dom'
import { Layout } from '@'
import { Provider } from 'react-redux'
import { updateRoute } from './store/features/main';
import { getServerStore } from './store'
import { Dispatch as _Dispatch } from '@reduxjs/toolkit'
import routeConfig from './routeConfig'
import './index.less'

function updateContext(context: any, routeMatch: any, store: any) {
  context.status = routeMatch ? 200 : 400
  context.preloadedState = store.getState()
}

async function getServerData(
  routeMatch: RouteMatch<any>[] | null,
  dispatch: any
) {
  if (routeMatch) {
    const { route, params, pathname } = routeMatch[routeMatch.length - 1]
    dispatch(updateRoute({ params, pathname }));
    const { PageComponent } = route as any
    const getInitialProps = PageComponent?.getInitialProps
    if (getInitialProps) {
      await Promise.all(getInitialProps().map((action: any) => dispatch(action)));
    }
  }
  return null
}

export async function render(url: string, context: any) {
  const routeMatch = matchRoutes(routeConfig, url)
  const store = getServerStore()
  await getServerData(routeMatch, store.dispatch)
  updateContext(context, routeMatch, store)

  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <Layout routes={routeConfig} />
      </Provider>
    </StaticRouter>
  )
}
