import React,{PureComponent,Fragment} from 'react'
import {connect} from 'react-redux'
import {history} from '../../store'
import styles from './index.less'
import { Row, Col, Card, Form, Input, Select, 
  Icon, Button, Dropdown, Menu, 
  InputNumber, DatePicker, Modal, message, Badge, Divider,Table } from 'antd';
import moment from 'moment';


const {RangePicker} = DatePicker;

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');
const statusMap = ['success', 'error'];
const status = ['启用', '禁用',];
const columns = [
  {
    title: '账号',
    dataIndex: 'account',
  },
  {
    title: '姓名',
    dataIndex: 'name',
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
    ],
    render(val) {
      return <Badge status={statusMap[val]} text={status[val]} />;
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createdate',
    sorter: true,
    // render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
  },
  {
    title: '操作',
    render: () => (
      <Fragment>
        <a href="">启用</a>
      </Fragment>
    ),
  },
];


  


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

        this.props.dispatch({
          type:'getuserlist',
        })


    }

    renderAdvancedForm() {

        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSearch} layout="inline">
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={8} sm={24}>
                <FormItem label="账号">
                  {getFieldDecorator('username')(
                    <Input placeholder="请输入" />
                  )}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="姓名">
                  {getFieldDecorator('name')(
                    <Input placeholder="请输入" />
                  )}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择" style={{ width: '100%' }}>
                      <Option value="0">启用</Option>
                      <Option value="1">禁用</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={8} sm={24}>
                <FormItem label="日期">
                  {getFieldDecorator('date')(
                     <RangePicker  />
                  )}
                </FormItem>
              </Col>
            </Row>
            <div style={{ overflow: 'hidden' }}>
              <span style={{ float: 'right', marginBottom: 24 }}>
                <Button type="primary" htmlType="submit">查询</Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                
              </span>
            </div>
          </Form>
        );
      }


    render(){

        const { list,listloading } = this.props;

        const rowSelection = {
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          },
          getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          }),
        };

        return(
            <Card bordered={false}>

                       <div className={styles.tableList}>
                            <div className={styles.tableListForm}>
                            {this.renderAdvancedForm()}
                            </div>
                            <div className={styles.tableListOperator}>
                                <Button icon="plus" type="primary" onClick={()=>(
                                  history.push("/syster/user/add")
                                )}>
                                    新建
                                </Button>
                        
                            </div>

                            <Table onChange={()=>{

                                  this.props.dispatch({
                                    type:"listload",
                                    payload:true,
                                  })

                                  setTimeout(() => {
                                    
                                    this.props.dispatch({
                                      type:"listload",
                                      payload:false,
                                    })

                                  }, 1500);

                            }} loading={listloading} rowSelection={rowSelection} dataSource={list} columns={columns}  />
                            
                        </div>


            </Card>

        )
    }

}

export default connect (({ user })=>(

     user

))(UserList)