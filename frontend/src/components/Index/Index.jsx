import React, { Component } from 'react';
import { Row, Col } from "antd";
import axios from 'axios';
// import './Home.css';

class Index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isDone: false
        }
        // this.logout = this.logout.bind(this);
    }

    async componentDidMount() {
        let response = await axios.get('/api/user/info');
        this.setState({
            rated: response.data.rated,
            recommendations: response.data.recommendations,
            isDone: true
        });
        // if ('Title' in response.data && response.data.Title !== "") {
        //     this.setState({
        //         movieInfo: response.data,
        //         isDone: true
        //     });
        // } else {
        //     this.setState({
        //         isError: true
        //     });
        // }
        
    }


    render() {
        
        if (!this.state.isDone) {
            return <div>loading...</div>
        }
        let ratedMovies = this.state.rated.map((movie) =>
            <li><a href={"/movie/"+movie.imdbId}>{movie.title}</a>: {movie.rating}</li>
        );
        let recommendationMovies = this.state.recommendations.map((movie) =>
            <li><a href={"/movie/"+movie.imdbId}>{movie.title}</a></li>
        );
        return ( 
            <div>
                {this.props.isLogin &&
                    <div>
                        <h2>recommendations for you</h2>
                        <ul>{recommendationMovies}</ul>
                        <h2>rated movies</h2>
                        <ul>{ratedMovies}</ul>
                    </div>  
                }
                <h2>popular movies</h2>
                
            </div>
        );
    }
}

export default Index;