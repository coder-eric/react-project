import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        var options = {
            auto: 3000,
            speed:1000,
            callback: (index, elem) => {
                this.setState({
                    index: index
                })
            }
        }
        return (
            <div className="category">
                <ReactSwipe className="carousel" swipeOptions={options}>
                    <div>
                        <ul>
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                            <li><Link className="link" to="/user"><div></div><span>美食</span></Link></li>                            
                        </ul>
                    </div>
                </ReactSwipe> 
                <ul className="dot">
                    <li className={this.state.index === 0 ? "active" : ""}></li>
                    <li className={this.state.index === 1 ? "active" : ""}></li>
                    <li className={this.state.index === 2 ? "active" : ""}></li>
                </ul>
            </div>
                                              
        )
    }
}

export default Category