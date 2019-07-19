import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './helpers/api';

class Jokes extends React.Component {
    state = {
        jokes: [],
    }
    async componentDidMount() {
        try {
            const result = await api.get('/jokes');
            console.log(result)
            this.setState({
                jokes: result.data,
            })
        } catch (err) {
            if (err.response.status === 401 || err.response.status === 403) {
                this.props.history.push('/signin');
            }
            console.log(err)
        }
    }
    render() {
        return (
            <>
                <h3>Jokes</h3>

                <ul>
                    {console.log(this.state, "JOKES")}
                    {this.state.jokes.map((joke, i) =>{
                        return <li key={i}>{joke.joke}</li>
                    })}
                    
                </ul>
            </>
        )
    }
}

export default withRouter(Jokes);