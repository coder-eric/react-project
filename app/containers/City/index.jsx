import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Header from './subpage/Header'
import SearchCity from './subpage/SearchCity'
import CitySection from './subpage/CitySection'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            cityName:"",
            sideOption:"inside"
        }
    }
    render() {
        return (
            <div className="city">
                <Header />
                <SearchCity />
                <div className="geo-location">
                    <span>无法获取您的定位</span>
                </div>
                <CitySection />
                <CitySection />
                <CitySection />
                <CitySection />
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default City
module.exports = City
