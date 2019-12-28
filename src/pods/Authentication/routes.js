import Login, { metaConfig } from './pages/Login';
import { LayoutType } from '~/global/Layout';
import Paths from './paths';

export default [
	{
		path: Paths.Login,
		Component: Login,
		metaConfig: metaConfig,
		layoutType: LayoutType.FloatingCard
	},
];
