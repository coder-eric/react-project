import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link } from "react-router";

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
  }

  render() {
    return (
      <div className="list">
          <div className="list-title">猜你喜欢</div>
           <ul>
               <li className="border-bottom">
                   <Link to="/user">
                        <img src="https://p0.meituan.net/deal/726c539fae70c89191790a3c7fb92c7e59707.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0" alt=""/>
                        <div>
                            <h1>汉堡王</h1>
                            <h3>[新华大街]低至0.5折大果粒草莓新地2份阿什顿发斯蒂芬阿萨斯东方闪电阿斯蒂芬阿斯蒂芬</h3>
                            <h5>&yen;12</h5>
                        </div>
                   </Link>
               </li>
               <li className="border-bottom">
                   <Link to="/user">
                        <img src="https://p0.meituan.net/deal/726c539fae70c89191790a3c7fb92c7e59707.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0" alt=""/>
                        <div>
                            <h1>汉堡王</h1>
                            <h3>[新华大街]低至0.5折大果粒草莓新地2份</h3>
                            <h5>&yen;12</h5>
                        </div>
                   </Link>
               </li>
                <li className="border-bottom">
                   <Link to="/user">
                        <img src="https://p0.meituan.net/deal/726c539fae70c89191790a3c7fb92c7e59707.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0" alt=""/>
                        <div>
                            <h1>汉堡王</h1>
                            <h3>[新华大街]低至0.5折大果粒草莓新地2份</h3>
                            <h5>&yen;12</h5>
                        </div>
                   </Link>
               </li>
                <li className="border-bottom">
                   <Link to="/user">
                        <img src="https://p0.meituan.net/deal/726c539fae70c89191790a3c7fb92c7e59707.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0" alt=""/>
                        <div>
                            <h1>汉堡王</h1>
                            <h3>[新华大街]低至0.5折大果粒草莓新地2份</h3>
                            <h5>&yen;12</h5>
                        </div>
                   </Link>
               </li>
           </ul>
      </div>
    );
  }
}

export default List;