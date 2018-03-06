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
 
const links = [{
    key: 'help',
    title: '帮助',
    href: '',
  }, {
    key: 'privacy',
    title: '隐私',
    href: '',
  }, {
    key: 'terms',
    title: '条款',
    href: '',
  }];
  
  const copyright = <div>Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品</div>;
  

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

        this.props.dispatch({
          type:'loading'
        })

        if (!err) {
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
            <DocumentTitle title={'登录'}>
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.top}>
                  <div className={styles.header}>
                    <Link to="/">
                      <img alt="logo" className={styles.logo} src={logo} />
                      <span className={styles.title}>Ant Design</span>
                    </Link>
                  </div>
                  <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
                </div>
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
              <UserName name="username" />
              <Password name="password" />
            </Tab>
            <Tab key="mobile" tab="手机号登录">
            {
                login.status === 'error' &&
                login.type === 'account' &&
                <Alert style={{ marginBottom: 24 }} message={'账号密码错误'} type="error" showIcon closable />
              }
              <Mobile name="mobile" />
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
              </div>
              <GlobalFooter links={links} copyright={copyright} />
            </div>
          </DocumentTitle>


         
        );
      }
  

    




}

export default  connect(({login})=>{


    return {
        login,

       }
    

})(LoginPage)



