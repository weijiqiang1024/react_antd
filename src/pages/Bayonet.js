/**
 * creact by weijq 170613
 */

import React, { Component, PropTypes } from 'react';
import { Form } from 'antd';

import { BayonetSerchForm, BayonetTableList } from '../components/BayonetComponent';
import styles from '../css/bayonetComponet.css';

const BayonetSerchComponent = Form.create()(BayonetSerchForm);

class Bayonet extends React.Component {
    // state = {
    //     queryForm: {}
    // }
    // hn1(v) {
    //     this.setState({
    //         queryForm: v
    //     });
    // }
    // hn1={v => this.hn1(v)}
    // queryForm = {this.state.queryForm}
    render() {
        return (
            <div>
                <BayonetSerchComponent {...this.props}  />
                <BayonetTableList {...this.props}/>
            </div>
        )
    }
}

Bayonet.propTypes = {
    onSerchData: PropTypes.func.isRequired
}

export default Bayonet;

