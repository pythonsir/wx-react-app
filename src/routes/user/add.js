import React,{PureComponent} from 'react'
import {Card,Form,Input,Select,Button} from 'antd'
import {connect} from 'react-redux'

/**
 *  用户列表
 */

const FormItem = Form.Item;

const Option = Select.Option;

 @Form.create()
 class UserAdd extends PureComponent{


    componentDidMount(){

        this.props.changetitle("用户管理—添加")


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
      

        return(
            <Card bordered={false}>
                <Form layout="horizontal">

                    <FormItem {...formItemLayout} label="账号">
                    {getFieldDecorator('account', {
                            rules: [{
                            required: true, message: '请输入账号',
                            }],
                        })(
                            <Input placeholder="请输入账号" />
                      )}


                    </FormItem>
                    <FormItem {...formItemLayout} label="姓名">
                    {getFieldDecorator('name', {
                            rules: [{
                            required: true, message: '请输入姓名',
                            }],
                        })(
                            <Input placeholder="请输入姓名" />
                      )}


                    </FormItem>
                    <FormItem {...formItemLayout} label="状态">
                    {getFieldDecorator('state', {
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
                        <Button type="primary" htmlType="submit" >
                            提交
                        </Button>
                        <Button style={{ marginLeft: 8 }}>保存</Button>
                    </FormItem>


                </Form>

            </Card>

        )
    }


}

export default connect ((state)=>(
    {
        state
    }
))(UserAdd)