import react, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({login, isAuthenticated}) =>
{  
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e =>
    {
        e.preventDefault();
        login(email, password);
    };

    // Redirect if logged in
    if (isAuthenticated)
    {
        return <Navigate to='/dashboard' />
    }


    return ( 
        <Fragment>
            <div className="container">
                <h1 className="large text-primary text-center pt-4">Login</h1>
                <p className="lead text-center"><i className="fas fa-user"></i> Login to your Account</p>
                <form className="form" onSubmit={(e)=> onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={(e)=>onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            minLength="6"
                            name='password'
                            value={password}
                            onChange={(e)=>onChange(e)}
                        />
                    </div>
                    <p className="my-1">
                        Don't have an account? <Link to="/signUp">Sign Up</Link>
                    </p>
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
        </div>
    </Fragment>
    );
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})



export default connect(mapStateToProps, {login})(Login);