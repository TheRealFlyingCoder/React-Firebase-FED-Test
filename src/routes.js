import ContentRoutes from './pods/Content/routes';
import AuthRoutes from './pods/Authentication/routes';

const routes = [
	...ContentRoutes,
	...AuthRoutes
];

export default routes;
