/**
 * Created by admin on 2017/7/31.
 */
import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import {Header, template} from '../common/mixin';
import {Tool} from '../../Config/Tool';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './login.less'
const FormItem = Form.Item;

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.login(values)
            }
        });
    }
    static childContextTypes = {
        login: React.PropTypes.any,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            password: ''
        }
        this.changeValue = (type, event) => {
            let value = event.target.value;
            value = value.trim();
            if (type === 'name') {
                this.setState({
                    name: event.target.value
                })
            } else if (type === 'password') {
                this.setState({
                    password: value
                })
            }
        }
        this.login = (values) => {
            this.props.postData('/login',values, (res) => {
                if (res.code == 200) {
                    browserHistory.push('/home')
                } else {
                    Tool.alert(res.msg)
                }
            }, 'nextPage')
        }

    }

    getChildContext() {
        return {
            login: React.PropTypes.any
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-wrapper">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入用户名'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default template({
    id: 'login',  //应用关联使用的redux
    component: WrappedNormalLoginForm, //接收数据的组件入口
});

