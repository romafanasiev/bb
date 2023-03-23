import { routes } from 'Constants';

export type TRoutes = (typeof routes)[keyof typeof routes];
