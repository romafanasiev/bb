import { routes } from 'Constants';

export type TContainer = (typeof routes)[keyof typeof routes];
