import React,{PureComponent} from 'react'
import {Card,Form,Input,Select,Button,Tooltip,Icon,message} from 'antd'
import {connect} from 'react-redux'

/**
 *  用户列表
 */

const FormItem = Form.Item;

const Option = Select.Option;

 @Form.create()
 class UserAdd extends PureComponent{


    state={
        password:'123456'
    }

    componentDidMount(){

        this.props.changetitle("用户管理—添加")
    }

   

    handleSubmit =(e) =>{

        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {

                this.props.dispatch({
                    type:'startsave'
                })

                this.props.dispatch({
                    type:'addUser',
                    payload:values
                })

            }
          });




    }

    render(){

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 7 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 12 },
              md: { span: 10 },
            },
          };

          const submitFormLayout = {
            wrapperCol: {
              xs: { span: 24, offset: 0 },
              sm: { span: 10, offset: 7 },
            },
          };

          const mesg = ()=>{

          }
          
      

        return(
            <Card bordered={false}>
                <Form  onSubmit={this.handleSubmit} layout="horizontal">

                    <FormItem {...formItemLayout} label="账号">
                    {getFieldDecorator('user_name', {
                            rules: [{
                            required: true, message: '请输入账号',
                            }],
                        })(
                            <Input placeholder="请输入账号" />
                      )}


                    </FormItem>

                    <FormItem {...formItemLayout} label={(
            <span>
              密码&nbsp;
              <Tooltip title="默认密码：123456">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )} >
                    {getFieldDecorator('password', {
                            rules: [{
                            required: true, message: '请输入密码',
                            }],
                            initialValue:this.state.password,
                        })(
                            <Input  type="password"/>
                      )}


                    </FormItem>
                
                
                    <FormItem {...formItemLayout} label="状态">
                    {getFieldDecorator('status', {
                            rules: [{
                            required: true, message: '请输入账号',
                            }],
                            initialValue:"0",
                        })(
                            <Select >
                                <Option value="0">禁用</Option>
                                <Option value="1">启用</Option>
                            </Select>
                      )}


                    </FormItem>

                    <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
                        <Button type="primary" htmlType="submit" loading={this.props.saveloading} >
                            提交
                        </Button>
                        <Button style={{ marginLeft: 8 }}>清空</Button>
                    </FormItem>


                </Form>

            </Card>

        )
    }


}

export default connect (({useradd})=>(
    
        useradd
   
))(UserAdd)