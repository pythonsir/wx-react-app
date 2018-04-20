import React,{PureComponent,Fragment} from 'react'
import {connect} from 'react-redux'
import styles from './index.less'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message, Badge, Divider } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');
const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];
const columns = [
  {
    title: '规则编号',
    dataIndex: 'no',
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
  {
    title: '服务调用次数',
    dataIndex: 'callNo',
    sorter: true,
    align: 'right',
    render: val => `${val} 万`,
    // mark to display a total number
    needTotal: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    filters: [
      {
        text: status[0],
        value: 0,
      },
      {
        text: status[1],
        value: 1,
      },
      {
        text: status[2],
        value: 2,
      },
      {
        text: status[3],
        value: 3,
      },
    ],
    render(val) {
      return <Badge status={statusMap[val]} text={status[val]} />;
    },
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    sorter: true,
    render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
  },
  {
    title: '操作',
    render: () => (
      <Fragment>
        <a href="">配置</a>
        <Divider type="vertical" />
        <a href="">订阅警报</a>
      </Fragment>
    ),
  },
];


const CreateForm = Form.create()((props) => {
    const { modalVisible, form, handleAdd, handleModalVisible } = props;
    const okHandle = () => {
      form.validateFields((err, fieldsValue) => {
        if (err) return;
        handleAdd(fieldsValue);
      });
    };
    return (
      <Modal
        title="新建规则"
        visible={modalVisible}
        onOk={okHandle}
        onCancel={() => handleModalVisible()}
      >
        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          label="描述"
        >
          {form.getFieldDecorator('desc', {
            rules: [{ required: true, message: 'Please input some description...' }],
          })(
            <Input placeholder="请输入" />
          )}
        </FormItem>
      </Modal>
    );
  });
  


/**
 *  用户列表
 */
@Form.create()
class UserList extends PureComponent{


    state = {
      modalVisible: false,
      expandForm: false,
      selectedRows: [],
      formValues: {},
    };

    componentDidMount(){

        this.props.changetitle("用户管理")

    }

    renderAdvancedForm() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSearch} layout="inline">
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={8} sm={24}>
                <FormItem label="规则编号">
                  {getFieldDecorator('no')(
                    <Input placeholder="请输入" />
                  )}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="使用状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择" style={{ width: '100%' }}>
                      <Option value="0">关闭</Option>
                      <Option value="1">运行中</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="调用次数">
                  {getFieldDecorator('number')(
                    <InputNumber style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={8} sm={24}>
                <FormItem label="更新日期">
                  {getFieldDecorator('date')(
                    <DatePicker style={{ width: '100%' }} placeholder="请输入更新日期" />
                  )}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="使用状态">
                  {getFieldDecorator('status3')(
                    <Select placeholder="请选择" style={{ width: '100%' }}>
                      <Option value="0">关闭</Option>
                      <Option value="1">运行中</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="使用状态">
                  {getFieldDecorator('status4')(
                    <Select placeholder="请选择" style={{ width: '100%' }}>
                      <Option value="0">关闭</Option>
                      <Option value="1">运行中</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <div style={{ overflow: 'hidden' }}>
              <span style={{ float: 'right', marginBottom: 24 }}>
                <Button type="primary" htmlType="submit">查询</Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                  收起 <Icon type="up" />
                </a>
              </span>
            </div>
          </Form>
        );
      }


    render(){
        return(
            <Card bordered={false}>

                       <div className={styles.tableList}>
                            <div className={styles.tableListForm}>
                            {this.renderAdvancedForm()}
                            </div>
                            <div className={styles.tableListOperator}>
                                <Button icon="plus" type="primary" >
                                    新建
                                </Button>
                        
                            </div>
                            
                        </div>


            </Card>

        )
    }

}

export default connect ((state)=>(
    {
        state
    }
))(UserList)