import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import './style.less'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
  }

  handleClick() {
	
  }

  render() {
    return (
      <div className="header">
		  <font>{"<"}</font>
          <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
