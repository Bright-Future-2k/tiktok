import config from '../config/index';

// Layouts
import { HeaderOnly } from '../layouts'

import Following from "../pages/Following"
import Home from "../pages/Home"
import Live from '../pages/Live';
import Profile from "../pages/Profile"
import Search from '../pages/Search'
import Upload from "../pages/Upload"


// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }