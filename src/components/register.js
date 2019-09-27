import React, { Component } from 'react';
import {Input, Container, Header } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';


const createPedido = gql`
    mutation createPedido($cor: String!, $email: String!) {
        createPedido(cor:"$cor", email:"$email"){
            cor
            email
        }
    }   
`;



export class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            cor: '',
            email: ''
        };
    }
    submitForm(e){
        (e).preventDefault()
        this.props.createPedido({
            variables: {
                cor: this.state.cor,
                email: this.state.email
            }
        })
    }
    render() {

        return (
            <div className='pedido'>
              <form id="add-pedido" onSubmit={this.submitForm.bind(this)}>
                <Container text>
                    <Header as='h1'className='pedido-header'>Order Yours!</Header>
                        <Input  onChange={ (e) => this.setState({cor: e.target.value})} placeholder='Request Color' fluid/>
                        <Input  onChange={ (e) => this.setState({email: e.target.value})} placeholder='Email' fluid/>
                        <button class="fluid ui button">Submit</button>
                        <Header as='h3'>
                        <div className='lista-pedidos'>  
                            <div class="ui inverted segment" id='lista-pedidos'>
                                <div class="ui inverted relaxed divided list">
                                    <div class="item">
                                    <div class="content">
                                        <div class="header">Yellow</div>
                                        Product Nº: 1
                                    </div>
                                    </div>
                                    <div class="item">
                                    <div class="content">
                                        <div class="header">Yellow and Blue</div>
                                        Product Nº: 2
                                    </div>
                                    </div>
                                    <div class="item">
                                    <div class="content">
                                        <div class="header">Blue</div>
                                        Product Nº: 3
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Header>
                </Container> 
            </form>  
        </div>
        )
    }
}

export default graphql(createPedido, {name: "createPedido"})(Register);
