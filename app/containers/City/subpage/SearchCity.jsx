import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SearchCity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="search-city">
                <div>
                    <span className="icon-search"></span>
                    <div>输入城市名或拼音查询</div>
                </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default City
module.exports = SearchCity