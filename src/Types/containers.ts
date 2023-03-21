import { containersIds } from 'Constants';

export type TContainer = (typeof containersIds)[keyof typeof containersIds];
