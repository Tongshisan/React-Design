/*
 * @Author: your name
 * @Date: 2021-01-28 19:10:37
 * @LastEditTime: 2021-01-30 16:44:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Design/src/pages/index/index.js
 */
import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('rootStore')
@observer
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '测试',
        };

        this.store = this.props.rootStore.designStore;
    }

    changeStateHandle = () => {
        this.setState({
            test: '这是测试文字',
        });
    }

    changeName = () => {
        const {setName} = this.store;
        setName('张三');
    }

    descriptor = () => {
        console.log('我是原逻辑');
    }

    promiseTest = () => {
        const {setTime} = this.store;
        setTime();
    }

    render() {
        const {name} = this.store;
        console.log(this.props);
        if (true) {
            console.log('s');
        }
        return (
            <div>
                <div>{name}</div>
                <div>{this.state.test}</div>
                <button onClick={this.changeStateHandle}>改变 state</button>
                <button onClick={this.changeName}>改变 store 中的值</button>
                <button onClick={this.descriptor}>装饰器</button>
                <button onClick={this.promiseTest}>测试 promise</button>
            </div>
        );
    }
}

export default Index;