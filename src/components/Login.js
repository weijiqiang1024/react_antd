/**
 * Created by zll on 2017/6/6.
 */
import React, {Component, PropTypes} from 'react';
import styles from '../css/login.css';
import { Form, Icon, Input, Button, Checkbox,Tooltip  } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.isSuccess) {
            debugger;
            nextProps.location.pathname='/Home';
            nextProps.history.push(nextProps.location);
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onIncreaseClick(values.userName,values.password);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <div className={styles.formLogin}>
                <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" className={styles.loginFormButton} loading={this.props.loading}>
                            登陆
                        </Button>
                        <div style={{display:this.props.isFail}}>
                            <Tooltip title="登录失败" >
                                <span style={{color:"red"}}>用户名密码不匹配.</span>
                            </Tooltip>
                        </div>

                    </FormItem>
                </Form>
            </div>

        );
    }
}

// const Login = Form.create({mapPropsToFields(props) {
//     return {
//         username: {
//             value: props.value,
//         },
//     };
// }})(NormalLoginForm);
const LoginForm = Form.create()(NormalLoginForm);

class Login extends React.Component {
    render(){
        return (
            <div className={styles.login}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>
                        周口预警防控平台
                    </div>
                </div>
                <div>

                </div>
                <div className={styles.footer}>
                    <div className={styles.footerTitle}>
                        <div className={styles.footerFont}>
                            支持谷歌浏览器 版权所有 @安徽蓝盾光电子股份有限公司
                        </div>
                    </div>
                </div>
                <LoginForm {...this.props} />
            </div>
        )
    }
}

Login.propTypes = {
    onIncreaseClick: PropTypes.func.isRequired
};

export default Login;

