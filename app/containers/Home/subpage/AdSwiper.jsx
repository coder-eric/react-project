import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link } from "react-router";

var timer = null;

class AdSwiper extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
    this.state = {
      index: 0,
      speed: 2000,
      timer: null,
      style: {
        transform: "translateY(0px)",
        transition: "all 1s"
      }
    };
  }

  componentDidMount() {
    var index = this.state.index;
    var speed = this.state.speed;

    timer = setInterval(() => {
      if (index <= 2) {
        index++;
      } else {
        index = 0;
      }
      this.setState({ index: index });
      this.upDate();
    }, speed);
   
  }

  upDate() {
    this.setState({
      style: {
        transform: `translateY(-${65 * this.state.index}px)`,
        transition: "all 1s"
      }
    });
  }


  componentWillUnmount() {
      clearInterval(timer);
  }
  
  render() {
    return (
      <div className="ad-swiper border-top">
        <div>
          <span>点评头条</span>
        </div>
        <ul style={this.state.style}>
          <li>
            <Link to="/user">
              <div>
                广告广告广告广告广告广告广告广告广告广告广告广告广告<img
                  src="https://img.meituan.net/dpgroup/7033c8ddf0e266d474ce443d99e4ed39312765.png%40100w_100h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20"
                  alt=""
                />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <div>
                广告广告广告广告广告广告广告广告广告广告广告广告广告<img
                  src="https://img.meituan.net/dpgroup/7033c8ddf0e266d474ce443d99e4ed39312765.png%40100w_100h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20"
                  alt=""
                />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <div>
                广告广告广告广告广告广告广告广告广告广告广告广告广告<img
                  src="https://img.meituan.net/dpgroup/7033c8ddf0e266d474ce443d99e4ed39312765.png%40100w_100h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20"
                  alt=""
                />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <div>
                广告广告广告广告广告广告广告广告广告广告广告广告广告<img
                  src="https://img.meituan.net/dpgroup/7033c8ddf0e266d474ce443d99e4ed39312765.png%40100w_100h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20"
                  alt=""
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default AdSwiper;
