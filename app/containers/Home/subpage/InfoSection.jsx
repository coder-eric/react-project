import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link } from "react-router";

class InfoSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
  }

  render() {
    return (
      <div className="info-section">
            <Link to="/user" className="title"><span></span><font>更多优惠></font></Link>
            <ul>
              <li>
                <Link to="/user">
                  <img src="https://p1.meituan.net/dpdeal/4489cceb405a98a69905e2dddb54c37471451.jpg%40120w_90h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20" alt=""/>
                  <h1>韩国美容</h1>
                  <h3>
                    &yen;
                    <span>1</span>
                  </h3>
                  <h5>&yen;98</h5>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <img src="https://p1.meituan.net/dpdeal/4489cceb405a98a69905e2dddb54c37471451.jpg%40120w_90h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20" alt=""/>
                  <h1>韩国美容</h1>
                  <h3>
                    &yen;
                    <span>1</span>
                  </h3>
                  <h5>&yen;98</h5>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <img src="https://p1.meituan.net/dpdeal/4489cceb405a98a69905e2dddb54c37471451.jpg%40120w_90h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20" alt=""/>
                  <h1>韩国美容</h1>
                  <h3>
                    &yen;
                    <span>1</span>
                  </h3>
                  <h5>&yen;98</h5>
                </Link>
              </li>
            </ul>
      </div>
    );
  }
}

export default InfoSection;