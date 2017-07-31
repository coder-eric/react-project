import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CitySection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            
        }
    }

    handleItemClick(item) {
        this.props.handleItemClick(item);
    }

    render() {
        const data = this.props.data;
        return (
            <div className="city-section">
                <div className="title">{data.title}</div>
                <ul className={data.title === "更多城市" ? "more" : "content"}>
                    {
                        data.items.map((item, index) => {                            
                            return (
                                <li onClick={this.handleItemClick.bind(this, {"item": item, "title":data.title})} key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default CitySection