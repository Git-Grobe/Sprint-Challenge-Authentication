import React from 'react';

//helper api axios function
import api from './helpers/api';

class Signup extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state);

        try {
            const result = await api.post('/register', {
                username: this.state.username,
                password: this.state.password,


            })

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
                <h3>Sign up!</h3>

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
                    <button type='submit'>Sign up</button>
                </form>
            </>
        )
    }
}

export default Signup;