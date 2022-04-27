// 4-8 设置服务端session
// 17:00

import { IronSession } from 'iron-session';

export type ISession = IronSession & Record<string, any>;
