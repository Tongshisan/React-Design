import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('rootStore')
@observer
class Index extends React.Component {
    constructor() {
        this.state = {
            test: '测试'
        }
    }

    btnHandle = () => {
        this.setState({
            test: '这是测试文字'
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.test}</div>
                <button onClick={this.btnHandle}></button>
            </div>
        )
    }
}

export default Index;