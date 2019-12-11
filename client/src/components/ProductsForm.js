import React from "react";
import {Header, Form, } from "semantic-ui-react";
import axios from "axios";


class ProductsForm extends React.Component {
    defaultValues = {name: "", description: "", department: "", price: "", }
    state = { ...this.defaultValues,};
    


      handleChange = (e) => {
        const { target: { name, value, } } = e;
        this.setState({ [name]: value, });
      }


      handleSubmit = (e) => {
        e.preventDefault();
        const product = { ...this.state, };
        // TODO: make api POST request
        axios.post("/api/products", {...this.state, })
            .then( res => {
                this.props.history.push("/products");
            })
        this.setState({ ...this.defaultValues, });
      }


    render() {
        const { name, price, description, department, } = this.state;

        return (
            <div>
            <Header as="h1">New Product</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input
                  label="Name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
                
                <Form.Input
                  label="Description"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={this.handleChange}
                />
            
                <Form.Input
                  label="Price"
                  name="price"
                  placeholder="Price"
                  type="number"
                  value={price}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Button color="blue">Submit</Form.Button>
            </Form>
          </div>
        )
    }

}

export default ProductsForm;