import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="header">
                <div className="left">北京</div>
                <div className="right"><i>图标</i></div>                
                <div className="middle">
                    <input type="text" placeholder="输入商户名、地点"/>
                </div>
            </div>
        )
    }
}

export default Header