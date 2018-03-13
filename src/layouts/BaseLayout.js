import React, {PureComponent} from 'react'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types';
import { Layout, Icon, message, Menu} from 'antd';
import {Switch,Route,Redirect,HashRouter} from 'react-router-dom'
import classNames from 'classnames';
import { getMenuData } from '../common/menu';
import { enquireScreen } from 'enquire-js';
import logo from '../assets/logo.svg';
import styles from  './BaseLayout.less';
import SiderMenu from '../components/SiderMenu'
import GlobalHeader from '../components/GlobalHeader'
import {connect} from 'react-redux'
import Authorized from '../utils/Authorized';
import { getRoutes } from '../utils/utils';




const { Header, Sider, Content } = Layout;

const { AuthorizedRoute } = Authorized;

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

  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  }
  state = {
    isMobile,
  };
    
    getChildContext() {
        const { location, routerData } = this.props;
        return {
          location,
          breadcrumbNameMap: routerData,
        };
      }
    
      componentDidMount() {
        enquireScreen((mobile) => {
          this.setState({
            isMobile: mobile,
          });
        });

        this.props.dispatch({
          type: 'fetchCurrent',
        });
       
      }

      handleMenuCollapse = (collapsed) => {
        this.props.dispatch({
          type: 'changeLayoutCollapsed',
          payload: collapsed,
        });
      }
    
      getPageTitle() {
        
        return "主页";
    
      }

      handleMenuClick = ({ key }) => {
        if (key === 'triggerError') {
          //this.props.dispatch(routerRedux.push('/exception/trigger'));
          return;
        }
        if (key === 'logout') {
          this.props.dispatch({
            type: 'logout',
          });
        }
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
            const {
              currentUser, collapsed, fetchingNotices, notices, routerData, match, location,
            } = this.props;
    
          const layout = (
    
            <Layout>
             
             <SiderMenu 
             menuData={getMenuData()}
             location={location}
              collapsed={collapsed}
              isMobile={this.state.isMobile}  
              Authorized={Authorized}
              onCollapse={this.handleMenuCollapse}
             />
    
            <Layout>
    
              <GlobalHeader 

              currentUser={currentUser}
              collapsed={collapsed}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
              />
              
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                 
               
                 <Switch>

                     {
                        redirectData.map(item =>
                        <Redirect key={item.from} exact from={item.from} to={item.to} />
                        )
                     }
                     {
                        getRoutes(match.path, routerData).map(item =>
                          (
                            <AuthorizedRoute
                              key={item.key}
                              path={item.path}
                              component={item.component}
                              exact={item.exact}
                              authority={item.authority}
                              redirectPath="/exception/403"
                            />
                          )
                        )
                    }
                     <Redirect exact from="/" to={bashRedirect} />
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
export default connect(({routerReducer,global,user})=>{

  return {
      location:routerReducer.location,
      collapsed:global.collapsed,
      currentUser:user.currentUser,
    
  }
})(BasicLayout);