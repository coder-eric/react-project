import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import './style.less'

class LoadeMore extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
  }

  handleClick() {
	this.props.loadMoreData();
  }

  render() {
    return (
      <div className="load-more">
		  <div className="top border-topbottom">
				{
					this.props.isLoadingMore
					? <div>加载中...</div>
					: <div onClick={this.handleClick.bind(this)}>加载更多</div>
				}
		  </div>
		<div className="bottom"></div>
      </div>
    );
  }
}

export default LoadeMore;
