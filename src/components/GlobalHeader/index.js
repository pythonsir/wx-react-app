import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';
import styles from './index.less'
const { Header } = Layout;

export default class GlobalHeader extends PureComponent {

    toggle = () => {
        
        const { collapsed} = this.props;
       
      }

    render(){
        return (
            <Header className={styles.header}>
                <Icon
                className={styles.trigger}
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                />
            </Header>
        )
    }


}