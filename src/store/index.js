/*
 * @Author: your name
 * @Date: 2021-01-28 16:05:21
 * @LastEditTime: 2021-01-28 16:09:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Design/src/store/index.js
 */

import {DesignStore} from './designStore';

class rootStore {
    designStore = new DesignStore();
}

export default new rootStore();