import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link } from "react-router";

class AdLink extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
  }

  render() {
    return (
      <div className="ad-link">
        <div className="banner">
          <Link to="/user">
		  	<img src="https://www.dpfile.com/sc/ares_pics/380d4ff05ffbb9b4bcc26d1c77c15ae0.png" alt=""/>
		  </Link>
        </div>
        <div className="middle">
			<Link to="/user" className="border-right">
				<h1>1元限时抢</h1>
				<h5>清凉美一下</h5>
				<img src="https://www.dpfile.com/sc/ares_pics/7a222b7c72db538dbcb1dc1d781b85a2.png" alt=""/>
			</Link>
			<Link to="/user">
				<h1>1元限时抢</h1>
				<h5>清凉美一下</h5>
				<img src="https://www.dpfile.com/sc/ares_pics/7a222b7c72db538dbcb1dc1d781b85a2.png" alt=""/>
			</Link>
		</div>
        <div className="bottom">
			<Link to="/user">
				<h1>领超值外卖券</h1>
				<h5>召唤免费龙虾</h5>
				<img src="https://www.dpfile.com/sc/ares_pics/471b2afb5e12bf6585d1fcd22172f305.png" alt=""/>
			</Link>
			<Link to="/user">
				<h1>领超值外卖券</h1>
				<h5>召唤免费龙虾</h5>
				<img src="https://www.dpfile.com/sc/ares_pics/471b2afb5e12bf6585d1fcd22172f305.png" alt=""/>
			</Link>
		</div>
      </div>
    );
  }
}

export default AdLink;
