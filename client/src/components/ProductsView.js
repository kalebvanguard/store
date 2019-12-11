import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";

class ProductsView extends React.Component {
  state = { product: {}, };

  componentDidMount() {
    const { id, } = this.props.match.params;

    axios.get(`/api/products/${id}`)
      .then( res => {
        this.setState({ product: res.data, });
      })
  };

  render() {
    const { name, description, department, price, } = this.state.product;
    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h3">{ department }</Header>
          <Header as="h5">${ price }</Header>          
          <Header as="p">{ description }</Header>          
        </Segment>
        <br />
        <br />
        <Button color="black" onClick={this.props.history.goBack}>
          Back
        </Button>
      </div>
    );
  };
};

export default ProductsView;
