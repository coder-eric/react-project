import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="header">
                 <Link className="left" to="/city">
                    {this.props.cityName}
                     <i className="icon-angle-down"></i> 
                </Link>
                <div className="middle" onClick={this.handleSearchClick.bind(this)}>
                    <i className="icon-search"></i>
                    输入商户名、地点
                </div>
                <Link className="right" to="/user"></Link>                                
            </div>
        )
    }

    //点击搜索
    handleSearchClick() {
        alert(123)
    }
}

export default Header