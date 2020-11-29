import { Component } from "react";

import Navigation from './components/Navigation'
import Jackets from './components/Jackets'
import { render } from '@testing-library/react';

import { Divider, Layout, Card, Tabs, Typography, Menu, Breadcrumb, Icon } from 'antd';


class App extends Component {


  render() {
    return (
      <div>
        <Layout>
          <Navigation/>
          
        </Layout>
      </div>
    )
  }

}

export default App 