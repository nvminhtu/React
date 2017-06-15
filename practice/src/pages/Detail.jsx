import React from 'react';
import ReactDOM from "react-dom";
import Chance from 'chance';
import request from 'superagent';
import axios from 'axios';
export default class Detail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data : [],
            repos : []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickSugerAgent = this.handleClickSugerAgent.bind(this);
        this.handleClickGithubAPI = this.handleClickGithubAPI.bind(this);
    }
    handleClick(){
        let _this = this;
        axios.get('https://5942c388c00fbb00119c390b.mockapi.io/api/v1/test')
            .then(function(response){
                _this.state.data = response.data;
                _this.setState(_this.state);
            })
            .catch(function(error){
                console.log(error);
            });  
    }
    handleClickSugerAgent(){
        let _this = this;
        request.get('https://5942c388c00fbb00119c390b.mockapi.io/api/v1/test')
                .then(function(success,failure){
                    _this.state.data = success.body;
                    _this.setState(_this.state);
                });
    }
    // demo using SugerAgent with API github for get user's Repos 
    handleClickGithubAPI(event){
        event.preventDefault();
        let username = this.refs.username.value;
        let _this = this;
        request.get(`https://api.github.com/users/${username}/repos`)
                .then(function(success,failure){
                    _this.state.repos = success.body;
                    _this.setState(_this.repos);
                });
    }
    render(){
        
        return(
            <div>
            
            <h1 onClick={this.handleClick} >Click me Axios</h1>
            <h1 onClick={this.handleClickSugerAgent} >Click me SugerAgent</h1>
            {
                this.state.data.map((item,index)=>(
                    <p key={index}>Hello {item.name} and  {item.age} year old !!!</p>
                ))             
            }
            <hr/>
            <form>
                <input type="text" ref="username" />
                <button onClick={this.handleClickGithubAPI}>Click Me Github API</button>
            </form>
                {
                    this.state.repos.map((item,index)=>(
                       <div key={index} >
                            <h3>Name Repo : {item.name} </h3>
                            <p>Description : {item.description}</p>
                       </div>
                    ))
                }
            </div>
        )
    }
}