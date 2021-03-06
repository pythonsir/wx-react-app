import {createElement} from 'react'
import { getMenuData } from './menu';
import pathToRegexp from 'path-to-regexp';

import LoginPage from '../routes/login/index'
import Main from '../routes/home/index'
import BasicLayout from '../layouts/BaseLayout'
import User from '../routes/user/index'
import UserLayout from '../layouts/UserLayout'
import Analysis  from '../routes/Dashboard/Analysis'
import UserManager from '../routes/user'
import UserList from '../routes/user/list'
import UserAdd from '../routes/user/add'

let routerDataCache;

function getFlatMenuData(menus) {
    let keys = {};
    menus.forEach((item) => {
      if (item.children) {
        keys[item.path] = { ...item };
        keys = { ...keys, ...getFlatMenuData(item.children) };
      } else {
        keys[item.path] = { ...item };
      }
    });
    return keys;
  }



export const getRouterData = () => {
    const routerConfig = {

        "/":{
            component: BasicLayout,
        },
        "/user":{
            component:UserLayout, 
        },
        "/user/login":{
            component:LoginPage,
            authority:'guest',
        },
        "/dashboard/analysis":{
          component:Analysis,
          authority:'admin'
        },
        "/syster/user":{
          component:UserManager,
          authority:'admin'
        },
        "/syster/user/list":{
          component:UserList,
          authority:'admin'
        },
        "/syster/user/add":{
          component:UserAdd,
          authority:'admin'
        },
     
    }
     
       
       
      
      

    const menuData = getFlatMenuData(getMenuData());

    const routerData = {};

     // The route matches the menu
  Object.keys(routerConfig).forEach((path) => {
    // Regular match item name
    // eg.  router /user/:id === /user/chen
    const pathRegexp = pathToRegexp(path);
    const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`/${key}`));
    let menuItem = {};
    // If menuKey is not empty
    if (menuKey) {
      menuItem = menuData[menuKey];
    }
    let router = routerConfig[path];
    // If you need to configure complex parameter routing,
    // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
    // eg . /list/:type/user/info/:id
    router = {
      ...router,
      name: router.name || menuItem.name,
      authority: router.authority || menuItem.authority,
    };
    routerData[path] = router;
  });

  Object.values(routerConfig).forEach((v)=>{

    let {component} = v;

    component.defaultProps={routerData}

  })

  return routerData;

}