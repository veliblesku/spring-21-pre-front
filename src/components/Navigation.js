import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Switch, Redirect,
  Link,
  useRouteMatch,
  useHistory, } from "react-router-dom";

import Jackets from './Jackets'
import Shirts from './Shirts'
import Accessories from './Accessories'

const { SubMenu } = Menu;


class Navigation extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Router>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="shirts" >
            <Link to="/shirts">Shirts</Link>
          </Menu.Item>
          <Menu.Item key="jackets" >
            <Link to="/jackets">Jackets</Link>
          </Menu.Item>
          <Menu.Item key="accessories">
            <Link to="/accessories">Accesories</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/shirts/">
            <Shirts/>
          </Route>
          <Route path="/jackets">
            <Jackets/>
          </Route>
          <Route path="/accessories">
            <Accessories/>
          </Route>
{/*           <Route path="/">
          </Route> */}
        </Switch>
      </Router>
    );
  }
}


export default Navigation