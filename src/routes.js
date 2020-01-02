import ContentRoutes from './pods/Content/routes';
import AuthRoutes from './pods/Authentication/routes';
import DashboardRoutes from './pods/Dashboard/routes';

const routes = [
	...ContentRoutes,
	...AuthRoutes,
	...DashboardRoutes,
];

export default routes;
