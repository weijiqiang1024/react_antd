/**
 * bayonet component by weijq 17.06.12
 */
import React, { Component, PropTypes } from 'react';
import { Input, Button, Form, Row, Col, Icon, Table, Pagination, Modal, Popconfirm } from 'antd';

import styles from '../css/bayonetComponet.css';

const FormItem = Form.Item;

let pageIndex = 1,
    pageSize = 10;
let queryData = {};


export class BayonetSerchForm extends React.Component {

    handleSbumit = (e) => {
        debugger;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            queryData = {
                eqId: values.eqId,
                eqName: values.eqName,
                orgId: values.orgId,
                pageIndex: pageIndex,
                pageSize: pageSize
            };
            // this.props.hn1(queryData);
        });
        this.props.onSerchData(queryData);
    }

    componentDidMount() {
        this.props.form.validateFields((err, values) => {
            console.log(this.props);
            queryData = {
                eqId: values.eqId,
                eqName: values.eqName,
                orgId: values.orgId,
                pageIndex: pageIndex,
                pageSize: pageSize
            }
            console.log('componentDidMount');
        });

        this.props.onSerchData(queryData);
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div id="bayonetComponet" >
                <div className={styles.serchPael}>
                    <Form layout="inline" onSubmit={this.handleSbumit}>
                        <FormItem label="卡口编号:">
                            {getFieldDecorator('eqId')(
                                <Input size="small" />
                            )}
                        </FormItem>
                        <FormItem label="卡口名称:">
                            {getFieldDecorator('eqName')(
                                <Input size="small" />
                            )}
                        </FormItem>
                        <FormItem label="所属机构:">
                            {getFieldDecorator('orgId')(
                                <Input size="small" />
                            )}
                        </FormItem>
                        <Button type="primary" htmlType="submit" size="small" style={{ marginTop: 5, padding: '0 16px' }}>查询</Button>
                    </Form>
                </div>
            </div >
        )
    }
}

export class BayonetTableList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                pageNum: 1,  /*翻页查询*/
                pageSize: 10,  /*分页查询*/
                activePage: 1,  /*默认显示一页*/
                selectedRowKeys: [],  // 这里配置默认勾选列
                loading: false,  /*antd*/
                selectedRow: [],
                showSizeChanger: true
            },
            visible: false, //添加卡口modal
            // loading:false,
        }
    }


    handleTableChange = (page, pageSize) => {
        // debugger;
        this.setState({
            current: page.current,
            pageSize: pageSize
        });
        queryData = {
            eqId: this.props.queryObj.eqId,
            eqName: this.props.queryObj.eqName,
            orgId: this.props.queryObj.orgId,
            pageIndex: page.current,
            pageSize: page.pageSize
        }
        console.log('handleTableChange');

        this.props.onSerchData(queryData);
    }

    //添加卡口信息
    addBayonet = () => {
        debugger;

        this.setState({
            visible: true,
            title: '添加卡口信息',
            record: {}
        });
    }


    //提交添加信息
    handleOk = (e) => {
        debugger;
        this.refs.form.validateFields((err, values) => {
            debugger;
            console.log(err);
            console.log(values);
            if (!err) {
                if (this.state.title == '添加卡口信息') {
                    this.props.addBayonet(values);
                } else if (this.state.title == '修改卡口信息') {
                    //form 表单不带id
                    values.id = this.state.record._id;
                    debugger;
                    this.props.editBayonet(values);
                }

                this.refs.form.resetFields();//重置表单值
                this.setState({
                    visible: false,
                });

                this.props.onSerchData(this.props.queryObj);
                //this.hideModelHandler()
            }
        });

    }
    handleCancel = (e) => {
        debugger;
        this.refs.form.resetFields();//重置表单值
        this.setState({
            visible: false,
        });
    }

    editBayonet = (record) => {
        // console.log(this.refs.form);
        this.setState({
            visible: true,
            title: '修改卡口信息',
            record: record

        });
    }

    deleteBayonet = (id) => {

        let idObj = {
            id:id
        }

        this.props.deleteBayonet(idObj);
        this.props.onSerchData(this.props.queryObj);
    }

    render() {

        const columns = [{
            title: '卡口编号',
            dataIndex: 'eqId'
            // render: text => {text},
        }, {
            title: '卡口名称',
            className: 'column-money',
            dataIndex: 'eqName',
        }, {
            title: '所属机构',
            dataIndex: 'orgId',
        }, {
            title: 'IP',
            className: 'column-money',
            dataIndex: 'ip',
        }, {
            title: '操作',
            className: 'column-money',
            dataIndex: 'oprator',
            render: (text, record, index) => (
                <span>
                    <a href="#" onClick={() => this.editBayonet(record)}>Edit</a>
                    <span className="ant-divider" />
                    <Popconfirm title="确定删除 ?" onConfirm={() => this.deleteBayonet(record._id)}>
                        <a href="#">Delete</a>
                    </Popconfirm>
                    
                </span>)
        }];

        const { datas, count } = this.props.bayonetData;

        let pagination = {
            total: count,
            showSizeChanger: true,
            showTotal: (count) => `共 ${count} 条`,
            // onShowSizeChange: onShowSizeChange,
            current: this.props.queryObj.pageIndex,
            pageSize: this.props.queryObj.pageSize
        };

        for (let index in datas) {
            datas[index].key = index;
        }

        return (
            <div>
                <Button type="primary" size="small" icon='plus' style={{ margin: 5 }} onClick={this.addBayonet}>添加卡口</Button>
                <Modal title={this.state.title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    maskClosable={false}
                    width={760}
                    >
                    <AddBayonetForm {...this.props} title={this.state.title} record={this.state.record} ref='form' />
                </Modal>
                <Table
                    columns={columns}
                    dataSource={datas}
                    bordered
                    pagination={pagination}
                    onChange={this.handleTableChange}
                    />
            </div>
        )
    }
}

class AddBayonet extends React.Component {

    // constructor()

    handleAddSbumit = (e) => {
        //     this.props.form.validateFields((err, values) => {
        //         debugger;
        //         this.props.addBayonet(values);
        //     });
    }

    checkInteger = (rule, value, callback) => {

        let re = new RegExp('^[0-9]*[1-9][0-9]*$');
        if (re.test(value)) callback();
        else callback('填写数字');
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: { span: 9 },
            wrapperCol: { span: 12 },
        };
        //,
        return (
            <div>
                <Form
                    onSubmit={this.handleAddSbumit}
                    style={{ padding: '10px 10px 0 10px' }}>
                    <Row gutter={14}>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='卡口编号:'>
                                {getFieldDecorator('eqId', { initialValue: this.props.record == undefined ? undefined : this.props.record.eqId }, {
                                    rules: [{
                                        required: true, message: '必填!'
                                    }, {
                                        validator: this.checkInteger,
                                    }],
                                })(
                                    <Input placeholder="placeholder" size='small' />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='卡口名称:'>
                                {getFieldDecorator('eqName', { initialValue: this.props.record == undefined ? '' : this.props.record.eqName }, {
                                    rules: [{
                                        required: true, message: '必填!',
                                    }, {
                                        validator: this.eqIName,
                                    }],
                                })(
                                    <Input placeholder="placeholder" size='small' />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='所属机构:'>
                                {getFieldDecorator('orgId', { initialValue: this.props.record == undefined ? '' : this.props.record.orgId }, {
                                    rules: [{
                                        required: true, message: '必填!',
                                    }, {
                                        validator: this.orgId,
                                    }],
                                })(
                                    <Input placeholder="placeholder" size='small' />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={14}>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='Ip:'>
                                {getFieldDecorator('ip', { initialValue: this.props.record == undefined ? '' : this.props.record.ip })(
                                    <Input placeholder="placeholder" size='small' />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='端口号:'>
                                {getFieldDecorator('port', { initialValue: this.props.record == undefined ? '' : this.props.record.port })(
                                    <Input placeholder="placeholder" size='small' />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='协议类型:'>
                                {getFieldDecorator('protocolType', { initialValue: this.props.record == undefined ? '' : this.props.record.protocolType })(
                                    <Input placeholder="placeholder" size='small' />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={14}>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='监控方向:'>
                                {getFieldDecorator('direction', { initialValue: this.props.record == undefined ? '' : this.props.record.direction })(
                                    <Input placeholder="placeholder" size='small' />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='点位信息:'>
                                {getFieldDecorator('position', { initialValue: this.props.record == undefined ? '' : this.props.record.position })(
                                    <Input placeholder="placeholder" size='small' />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='接入平台:'>
                                {getFieldDecorator('platform', { initialValue: this.props.record == undefined ? '' : this.props.record.platform })(
                                    <Input placeholder="placeholder" size='small' />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <FormItem {...formItemLayout} label='备注:'>
                                {getFieldDecorator('ps', { initialValue: this.props.record == undefined ? '' : this.props.record.ps }, {
                                    rules: [{
                                        required: false,
                                    }],
                                })(
                                    <Input placeholder="placeholder" size='small' />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

const AddBayonetForm = Form.create()(AddBayonet);


// export default Bayonet;