/*
 * @Author: your name
 * @Date: 2021-01-28 16:07:30
 * @LastEditTime: 2021-01-28 16:11:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Design/src/store/designStore.js
 */

import {observable, action, runInAction, makeObservable} from 'mobx';

export class DesignStore {
    constructor() {
        makeObservable(this);
    }
    
    @observable name = 'lizhi';

    @action
    setName = (name) => {
        this.name = name;
    }
}