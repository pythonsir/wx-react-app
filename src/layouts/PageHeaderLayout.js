import React,{PureComponent} from 'react';
import { Link } from 'react-router-dom';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import styles from './PageHeaderLayout.less';

export default class PageHeaderLayout extends PureComponent{


  render(){

    const {children,breadcrumbList,top} = this.props;

    const home = [{
        title: '主页',
        href: '/dashboard/analysis',
      },
    ]
    
    const breadcrumbItems = home.concat(breadcrumbList)

    return (

          <div style={{ margin: '-24px -24px 0' }} >
          {top}
          <PageHeader breadcrumbList={breadcrumbItems} title={this.props.title}   />
          {children ? <div className={styles.content}>{children}</div> : null}
        </div>

    )


  }



}


