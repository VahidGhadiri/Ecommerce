import React from "react";
import shopData from "./shop.data";
import PreviewCollection from "../../components/preview-collections/preview-collections.component";
import { InsertEmoticon } from "@material-ui/icons";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: shopData,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {
            collection.map(({id, ...otherCollectionProps})=>(
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
      </div>
    );
  }
}

export default ShopPage;
