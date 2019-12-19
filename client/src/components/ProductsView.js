import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";



class ProductsView extends React.Component {
  state = { product: {}, reviews: [], };

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


        <div class="ui buttons">
            <button class="ui blue button">Comment</button>
            <div class="or"></div>
            <button class="ui button"onClick={this.props.history.goBack}>Back</button>
          </div>
      </div>
      
    );
  };
};

export default ProductsView;
