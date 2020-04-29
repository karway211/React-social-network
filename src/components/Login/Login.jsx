import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Element } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from './../common/FormControls/FormControls.module.css';


const LoginForm = (props) => {
    const Input = Element('input')
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'email'} component={Input} validate={[required]}/>  
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} type='password' component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={'rememberMe'} component={Input}/>
                </div>
                {props.error && <div className={s.formSammaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'contact' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'} />;
    };
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
