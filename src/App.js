import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';




//Componentes



//apollo clients setup

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})


class App extends Component {
  render() {
    return (
     <ApolloProvider client={client}>
        <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Post-it" scroll>
                <Navigation>
                    <Link to="">Home</Link>
                    <Link to="/register">Get Now!</Link>
                    <Link to="/projects">Products</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Post-it">
                <Navigation>
                  <Link to="">Home</Link>
                  <Link to="/register">Get Now!</Link>
                  <Link to="/projects">Products</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
