import React ,{Component} from 'react'


import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Icon } from 'antd';
import logo from '../../assets/logo.svg';
import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox } from 'antd';
import  styles from  './login.less';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import DocumentTitle from 'react-document-title';
import { push } from 'react-router-redux'

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
 

  

class LoginPage extends Component{

  state = {
    type: 'account',
    autoLogin: true,
  }



  onTabChange = (key) => {
    this.setState({
      type: key,
    });
  }

  onSubmit = (err, values) => {

        const { type } = this.state;


        if (!err) {

        this.props.dispatch({
          type:'loading'
        })

          setTimeout(() => {
            
            this.props.dispatch({
              type:'getToken',
              payload:{
                ...values,
                type,
              }
  
            })

          }, 1200);
         

        }
        
      }
     
      changeAutoLogin = (e) => {
        this.setState({
          autoLogin: e.target.checked,
        });
      }
      render() {

        const {login} = this.props;

        return (
          <div className={styles.main}>
            <Login
            defaultActiveKey={this.state.type}
            onTabChange={this.onTabChange}
            onSubmit={this.onSubmit}
          >
            <Tab key="account" tab="账号密码登录">
              {
                login.status === 'error' &&
                login.type === 'account' &&
                <Alert style={{ marginBottom: 24 }} message={'账号密码错误'} type="error" showIcon closable />
              }
              <UserName name="username" placeholder="admin/user"  />
              <Password name="password" placeholder="888888/123456" />
            </Tab>
            <Tab key="mobile" tab="手机号登录">
            {
                login.status === 'error' &&
                login.type === 'mobile' &&
                <Alert style={{ marginBottom: 24 }} message={'账号密码错误'} type="error" showIcon closable />
              }
              <Mobile name="mobile"  />
              <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
            </Tab>
            <div>
              <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>自动登录</Checkbox>
              <a style={{ float: 'right' }} href="">忘记密码</a>
            </div>
            <Submit loading={login.submitting}>登录</Submit>
            <div>
              其他登录方式
              <span className="icon icon-alipay" />
              <span className="icon icon-taobao" />
              <span className="icon icon-weibo" />
              <a style={{ float: 'right' }} href="">注册账户</a>
            </div>
          </Login>                
       </div>
              

         
        );
      }
  

    




}

export default  connect(({login})=>{


    return {
        login,

       }
    

})(LoginPage)



