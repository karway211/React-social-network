import React from 'react';
import { reduxForm } from 'redux-form'
import { Element, createField } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from './../common/FormControls/FormControls.module.css';


const LoginForm = ({handleSubmit, error}) => {
    const Input = Element('input')
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createField('login', 'email', [required], Input)}
                {createField('password', 'password', [required], Input, {type: 'password'})}
                {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
                {/* <div>
                    <Field placeholder={'login'} name={'email'} component={Input} validate={[required]}/>  
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} type='password' component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={'rememberMe'} component={Input}/>
                </div> */}
                {error && <div className={s.formSammaryError}>
                    {error}
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
