import { lazy } from 'react'
const HomePage = lazy(() => import("../containers/Home/Homepage"))

export const routesHome = [
    { path: '/', component: HomePage, exact: true },
]