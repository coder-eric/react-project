import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
          isInside: true
      }
  }

  handleBackClick() {
	window.history.back();
  }

  handleInsideClick() {         
    this.setState({
        isInside: true
    })
  }

  handleOutsideClick() {   
    this.setState({
        isInside: false
    })  
  }

  render() {
    return (
      <div className="header">
		  <span onClick={this.handleBackClick.bind(this)} className="back icon-chevron-left"></span>
          <div>
              <span className={"inside border" + (this.state.isInside ? " active" : "")} onClick={this.handleInsideClick.bind(this)}>国内</span>
              <span className={"outside border" + (this.state.isInside ? "" : " active")} onClick={this.handleOutsideClick.bind(this)}>国外</span>
          </div>
      </div>
    );
  }
}

export default Header;