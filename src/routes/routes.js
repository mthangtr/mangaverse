import config from '@/config';

// Pages
import Home from '@/pages/Home';
import Bookmark from '@/pages/Bookmark';
import Profile from '@/pages/Profile';
import Category from '@/pages/Category';
import Search from '@/pages/Search';
import History from '@/pages/History';
import Details from '@/pages/Details';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.bookmark, component: Bookmark },
    { path: config.routes.category, component: Category },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.history, component: History },
    { path: config.routes.search, component: Search },
    { path: config.routes.detail, component: Details },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };