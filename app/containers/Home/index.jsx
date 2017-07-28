import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Header from './subpage/Header';
import Category from './subpage/Category';
import { connect } from 'react-redux'
import { get } from '../../fetch/get.js'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            category: []
        }
    }

    render() {
        return (
            <div className="home">
                <Header cityName={this.props.userinfo.cityName}/>
                <Category />
            </div>
        )
    }

    componentDidMount() {
        const result = get('/api/2');
        if(result.ret){
            this.setState({
                category: result.data.category
            })
        }
        console.log(result)        
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
