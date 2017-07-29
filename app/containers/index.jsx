import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import locaStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js'

import FastClick from '../util/fastclick.js'

FastClick.attach(document.body);

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        let cityName = locaStore.getItem(CITYNAME);
        if( cityName == null ){
            cityName = "北京"
        }
        
        //将城市信息存储到store
        this.props.userInfoActions.update({
            cityName: cityName
        })
        setTimeout(()=>{
            this.setState({
                initDone: true
            })
        },0)
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
