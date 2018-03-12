import React, {PureComponent} from 'react'
import DocumentTitle from 'react-document-title'
import { Layout, Icon, message, Menu} from 'antd';
import {Switch,Route,Redirect,HashRouter} from 'react-router-dom'
import classNames from 'classnames';
import { getMenuData } from '../common/menu';
import { enquireScreen } from 'enquire-js';
import logo from '../assets/logo.svg';
import styles from  './BaseLayout.less';
import SiderMenu from '../components/SiderMenu'
import GlobalHeader from '../components/GlobalHeader'



const { Header, Sider, Content } = Layout;

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = (item) => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `/${item.path}`,
        to: `/${item.children[0].path}`,
      });
      item.children.forEach((children) => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

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

class BasicLayout extends PureComponent{


    state = {
        collapsed: false,
      };
    
      // getChildContext() {
      //   const { location, routerData } = this.props;
      //   return {
      //     location,
      //     breadcrumbNameMap: routerData,
      //   };
      // }
    
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

      getBashRedirect = () => {
        // According to the url parameter to redirect
        // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
        const urlParams = new URL(window.location.href);
    
        const redirect = urlParams.searchParams.get('redirect');
        // Remove the parameters in the url
        if (redirect) {
          urlParams.searchParams.delete('redirect');
          window.history.replaceState(null, 'redirect', urlParams.href);
        } else {
          return '/dashboard/analysis';
        }
        return redirect;
      }

        
        render() {
    

            const bashRedirect = this.getBashRedirect();

    
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
                 
                 <HashRouter>
                 <Switch>

                     {
                        redirectData.map(item =>
                        <Redirect key={item.from} exact from={item.from} to={item.to} />
                        )
                     }
                     <Redirect exact from="/" to={bashRedirect} />
                </Switch>
                </HashRouter>
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