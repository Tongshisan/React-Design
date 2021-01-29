/*
 * @Author: your name
 * @Date: 2021-01-28 19:10:37
 * @LastEditTime: 2021-01-29 09:47:42
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
            test: '测试'
        }

        this.store = this.props.rootStore.designStore;
    }

    btnHandle = () => {
        this.setState({
            test: '这是测试文字'
        });
    }

    render() {
        const {name} = this.store;
        console.log(this.props)
        return (
            <div>
                <div>{name}</div>
                <div>{this.state.test}</div>
                <button onClick={this.btnHandle}></button>
            </div>
        )
    }
}

export default Index;