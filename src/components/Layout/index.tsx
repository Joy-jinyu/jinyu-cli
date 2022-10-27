/* @vite-ignore */
import React, { ReactPropTypes } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from '@';
import { route, TypedComponentType } from './interface';
import './index.less';

export default function Layout(props: { routes: Array<route> }) {
    const { routes } = props;

    return (
        <Routes>
            {routes.map((route: route) => {
                const {
                    path = '',
                    PageComponent,
                    exact = true,
                    redirect
                } = route;

                if (redirect) {
                    return <Navigate replace={true} to={redirect} key={path} />;
                }

                const Component =
                    PageComponent &&
                    (typeof PageComponent === 'string' ? (
                        <React.Suspense fallback={<p>loading</p>}>
                            {
                                React.lazy(
                                    () =>
                                        import(
                                            `../../pages/${PageComponent}.tsx`
                                        )
                                ) as TypedComponentType
                            }
                        </React.Suspense>
                    ) : (
                        PageComponent
                    ));

                const MyRender = ((props: ReactPropTypes) => (
                    <div className="page-layout">
                        <Header />
                        <div className="content">
                            <Component {...props} />
                        </div>
                        <Footer />
                    </div>
                )) as any;

                return (
                    <Route
                        {...props}
                        path={path}
                        key={path}
                        element={<MyRender />}
                    />
                );
            })}
        </Routes>
    );
}
