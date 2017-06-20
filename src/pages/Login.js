/**
 * Created by zll on 2017/6/12.
 */
import React, {Component, PropTypes} from 'react';
import styles from '../css/login.css';
import NormalLoginForm from '../components/NormalLoginForm.js';
import { Form} from 'antd';

const LoginForm = Form.create()(NormalLoginForm);
class Login extends React.Component {
    render(){
        debugger;
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