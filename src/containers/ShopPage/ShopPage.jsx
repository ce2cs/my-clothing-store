import React, {Component} from "react";
import SHOP_DATA from "./Data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import "./ShopPage.scss"
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return(
      <div className='shop-page'>
        {this.state.collections.map(({id, ...otherCollectionData}) => (
          <CollectionPreview key={id} {...otherCollectionData}/>
          ))}
      </div>
    )
  }
}

export default ShopPage;