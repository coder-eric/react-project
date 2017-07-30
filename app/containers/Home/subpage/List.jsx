import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link } from "react-router";
import LoadMore from "../../../components/LoadMore"
import { getListData } from '../../../fetch/home/home.js'

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
    this.state = {
        isLoadingMore: false,
        listInfo:[]
    }
  }

  loadMoreData() {
      this.setState({
        isLoadingMore: true
    })
      var result = getListData("beijing", 2);
      result.then((res) => {
            return res.json();
        }).then((json) => {
           this.handleLoadDataSucc(json);
        });
  }

  handleLoadDataSucc(json) {
	if( json.ret ){
		var data = json.data;                
		this.setState({
			listInfo: this.state.listInfo.concat(data),
			isLoadingMore: false
		})
		this.props.updateList();
	}else{
		console.log("get list data failed")
	}
  }

  render() {
    return (
      <div className="list">
          <div className="list-title">猜你喜欢</div>
           <ul>
               {
                   this.state.listInfo.map((item, index) => {
                       return(
                           <li className="border-bottom" key={index}>
                                <Link to={item.url}>
                                        <div className="image">
                                            {
                                                item.sign
                                                ? <span>{item.sign}</span>
                                                : ""
                                            }
                                            <img src={item.img} />                       
                                        </div>
                                        <div className="content">
                                            <h1>{item.firstTitle}</h1>
                                            <h3>{item.secondTitle}</h3>
                                            <h5>
                                                <div className="price"><span>&yen;</span>{item.price}</div>
                                                <div className="pre-price"><span>&yen;</span>{item.prePrice}</div>
                                                <div className="count">已售{item.count}</div>
                                            </h5>
                                        </div>
                                </Link>
                            </li>
                       )
                   })
               }
           </ul>
           <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreData={this.loadMoreData.bind(this)}/>
      </div>
    );
  }
}

export default List;