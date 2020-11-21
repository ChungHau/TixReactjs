// import { lazy } from 'react'
import HomePage from '../containers/Home/Homepage'
// import Aboutpage from '../containers/Home/About'
// const HomePage = lazy(() => import("../containers/Home/Homepage"))
export const routesHome = [
    { path: '/', component: HomePage, exact: true },
]