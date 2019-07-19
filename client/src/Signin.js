import React from 'react';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';

//helper api axios function
import api from './helpers/api';

class Signin extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state);

        try {
            // const endpoint = 'http://localhost:5000/api/auth/login';
            // const result = await axios.post(endpoint, {
            //     username: this.state.username,
            //     password: this.state.password,

            // })

            const result = await api.post('/login', {
                username: this.state.username,
                password: this.state.password,

            })

            // set token as cookie //
            // document.cookie = `token=${result.data.token}`

            localStorage.setItem('token', result.data.token);
            this.props.history.push('/jokes');

            console.log(result);
        } catch (err) {
            console.log(err);
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <>
                <h3>Sign in!</h3>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        onChange={this.handleChange}
                        value={this.state.username}
                    />

                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <button type='submit'>Login</button>
                </form>
            </>
        )
    }
}

export default withRouter(Signin);