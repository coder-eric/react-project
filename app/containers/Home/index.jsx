import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Header from './subpage/Header'
import Category from './subpage/Category'
import AdSwiper from './subpage/AdSwiper'
import AdLink from './subpage/AdLink'
import InfoSection from './subpage/InfoSection'
import List from './subpage/List'
import { connect } from 'react-redux'
import { getHomeData } from '../../fetch/home/home.js'
import IScroll from '../../util/iscroll-probe.js'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            category: [],
            options: {
                mouseWheel: true,
                scrollbars: true
            }
        }
    }

    componentDidMount() {
        const result = getHomeData(this.props.userinfo.cityName);
        result.then((res) => {
            return res.json();
        }).then((json) => {
            if( json.ret ){
                const data = json.data;
                this.setState({
                    category:data.category
                })
            }else{
                console.log("get home data failed")
            }
        });

        var myScroll = new IScroll(this.refs.iscroll, {
            scrollX: false,
            scrollY: true
        });
    }

    render() {
        var options = {
            mouseWheel: true,
            scrollbars: true,
            freeScroll: true,
            invertWheelDirection: true,
            momentum: false
}
        return (
            <div className="home">
                <Header cityName={this.props.userinfo.cityName}/>
                 <div ref="iscroll" className="iscroll"> 
                    <div className="iscroll-inner">
                        <Category /> 
                        <AdSwiper /> 
                        <AdLink />
                        <InfoSection /> 
                        <InfoSection />
                        <List />
                    </div>                
                 </div>  
            </div>
        )
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
