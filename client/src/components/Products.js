import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Header, } from "semantic-ui-react";

class Products extends React.Component {
  state = { products: [], };

  componentDidMount() {
    axios.get("/api/products")
      .then( res => {
        this.setState({ products: res.data, });
      })
  };

  renderProducts = () => {
    const { products, } = this.state;

    if (products.length <= 0)
      return <Header as="h2">No Products</Header>
      
    return products.map( product => (
      <Card>
        <Card.Content>
          <Card.Header>{ product.name }</Card.Header>
          <Card.Meta>{ product.department }</Card.Meta>
          <Card.Description>{ product.description }</Card.Description>
        </Card.Content>

        <Card.Content extra>
            <div class="ui buttons">
              <Button color="green" as={Link} to={`/products/${product.id}`}>
                View
              </Button>
              <div class="or"></div>
              <Button color="blue" as={Link} to={`/products/${product.id}`}>
                comment
              </Button>
            </div>
        </Card.Content>
      </Card>
    ))
  };

  render() {
    return (
      <div>
        <Header as="h1">Products</Header>
        <br />
        <Card.Group>
          { this.renderProducts() }
        </Card.Group>
      </div>
    );
  };
};

export default Products;
