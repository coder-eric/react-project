import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Header from './subpage/Header'
import SearchCity from './subpage/SearchCity'
import CitySection from './subpage/CitySection'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'
import { CITYNAME } from '../../config/localStoreKey.js'
import locaStore from '../../util/localStore.js'
import IScroll from '../../util/iscroll-probe.js'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            cityName:"",
            sideOption:"inside",
            citySectionList: [{
                "title":"热门城市",
                items: ["北京","上海","广州","深圳","太原","杭州","北京","上海","广州"]
            },{
                "title":"更多城市",
                items: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"]
            },{
                "title":"A",
                items: ["北京","上海","广州","深圳","beijin"]
            },{
                "title":"B",
                items: ["北京","上海","广州","深圳","beijin"]
            },{
                "title":"C",
                items: ["北京","上海","广州","深圳","beijin"]
            },{
                "title":"D",
                items: ["北京","上海","广州","深圳","beijin"]
            },{
                "title":"E",
                items: ["北京","上海","广州","深圳","beijin"]
            },{
                "title":"F",
                items: ["北京","上海","广州","深圳","beijin"]
            },{
                "title":"G",
                items: ["北京","上海","广州","深圳","beijin"]
            },{
                "title":"H",
                items: ["北京","上海","广州","深圳","beijin"]
            }]
        }
    }

    handleItemClick(msg) {
        if(msg.title === "更多城市"){
            this.handleMoreCityClick(msg.item);
        }else{
            this.handleChangeCityClick(msg.item);            
        }
    }

    handleMoreCityClick(item) {
        console.log(item, "more")
    }

    handleChangeCityClick(newCity) {
        console.log(newCity, "hot")  
        this.props.userInfoActions.update({
            cityName: newCity
        })
        
        localStorage.setItem(CITYNAME, newCity);

        hashHistory.push('/')
    }

    componentDidMount() {
        setTimeout(() => {
            new IScroll(this.refs.iscroll, {
                scrollX: false,
                scrollY: true
            });
        }, 100);
    }

    render() {
        return (
            <div className="city" ref="iscroll">
                <div>
                    <Header />
                    <SearchCity />
                    <div className="geo-location">
                        <span>{this.props.userinfo.cityName}</span>
                    </div>
                    {
                        this.state.citySectionList.map((item, index) => {
                            return (
                                <CitySection data={item} handleItemClick={this.handleItemClick.bind(this)} key={index}/>                            
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

//----------------------------------------------- 连接 redux ---------------------------------------------
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
