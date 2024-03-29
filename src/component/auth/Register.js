import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


const Register = ({ setAlert, register, isAuthenticated }) =>
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e =>
    {

        e.preventDefault();
        
        if (password !== password2)
        {
            setAlert('Passwords do not match', 'danger');
        }
        else
        {
            register({ name, email, password });
        }
}

    if (isAuthenticated)
    {
        return <Navigate to='/dashboard' />
    }


    return ( 
        <Fragment>
            <div className="container">
                <h1 className="large text-primary text-center pt-4">Sign Up</h1>
                <p className="lead text-center">
                    <i className="fas fa-user"></i>
                    Create Your Account
                </p>
                <form className="form" onSubmit={ e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                        />
                        <small className="form-text">
                            This site uses Gravatar so if you want a profile image, use a
                            Gravatar email
                        </small>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            minLength="6"
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            minLength="6"
                            name='password2'
                            value={password2}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" onSubmit={ e => onSubmit(e)}/>
                </form>
                <p className="my-1">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
        </div>
    </Fragment>
    );
}


Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool 
}

const mapStateToProps = (state) =>(
{
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(Register);