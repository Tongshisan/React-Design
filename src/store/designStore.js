/*
 * @Author: your name
 * @Date: 2021-01-28 16:07:30
 * @LastEditTime: 2021-01-30 16:49:46
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
    @observable age = 26;
    @observable time = 0;

    @action
    setName = name => {
        this.name = name;
    }

    isTest = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('500-start');
                resolve('500');
                console.log('500-end');
            });

            setTimeout(() => {
                console.log('1000---start');
                resolve('1000');
                console.log('1000---end');
            });
        });
    }

    @action
    setTime = () => {
        console.log(this.isTest());
        this.isTest().then(res => {
            console.log('res====', res);
        });
    }

}