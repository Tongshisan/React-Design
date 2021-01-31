/*
 * @Author: your name
 * @Date: 2021-01-28 16:05:21
 * @LastEditTime: 2021-01-29 18:39:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Design/src/store/index.js
 */

import {DesignStore} from './designStore';

class RootStore {
    designStore = new DesignStore();
}

export default new RootStore();