import React, {PureComponent} from 'react'
import DocumentTitle from 'react-document-title'
import { Layout, Icon, message, Menu} from 'antd';
import {Switch,Route} from 'react-router-dom'
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import logo from '../assets/logo.svg';
import styles from  './BaseLayout.less';
import SiderMenu from '../components/SiderMenu'
import GlobalHeader from '../components/GlobalHeader'
import User from '../routes/user'

const { Header, Sider, Content } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class BasicLayout extends React.PureComponent{


    state = {
        collapsed: false,
      };
    
    
    
      componentDidMount() {
        enquireScreen((mobile) => {
          this.setState({
            isMobile: mobile,
          });
        });
       
      }
    
      getPageTitle() {
        
        return "主页";
    
      }
        
        render() {
    
    
          const layout = (
    
            <Layout>
             
             <SiderMenu 
              collapsed={this.state.collapsed}
              isMobile={this.state.isMobile}  
             />
    
            <Layout>
    
              <GlobalHeader 
    
              collapsed={this.state.collapsed}
              
              />
              
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                 <Switch>
                 <Route exact path="/user" component={User} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
          )
          return (
          <DocumentTitle title={this.getPageTitle()}>
            {layout}
          </DocumentTitle>
          );
        }

}
export default BasicLayout;