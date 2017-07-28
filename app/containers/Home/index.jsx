import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import HeaderComponent from './subpage/header.jsx';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="home">
                <HeaderComponent />
            </div>
        )
    }
}

export default Home
