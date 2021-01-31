/*
 * @Author: lizhi
 * @Date: 2021-01-28 16:18:57
 * @LastEditTime: 2021-01-29 18:37:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Design/src/router/index.js
 */
import loadable from '@loadable/component';
export const routerConfig = [
    {
        path: '/',
        component: loadable(
            () => import('../pages/index')
        ),
        exact: true,
        children: [],
    },
];