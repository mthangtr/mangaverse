import config from '@/config';

// Pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Category from '@/pages/Category';
import Search from '@/pages/Search';
import History from '@/pages/History';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.category, component: Category },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.history, component: History },
    { path: config.routes.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };