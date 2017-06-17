// Component: MultiFeeds
import React from 'react';
import Chance from 'chance';
import ajax from 'superagent';

// https://developer.github.com/v3/repos/#get-branc
// * ví dụ branch master (https://api.github.com/repos/nvminhtu/React/)
// * ví dụ show repos của 1 user (user-repos) (https://api.github.com/users/nvminhtu/repos)
// * ví dụ show repos của 1 Organization (org-repos) (https://api.github.com/users/technetup/repos)
// * ví dụ show thông tin của 1 user (user-info) (https://api.github.com/users/nvminhtu)
class MultiFeeds extends React.Component {
   
	// constructor
	constructor(props) {
		super(props);
	    this.state = {
	    	mode: 'user_repos',
	    	user_repos: [],
	    	org_repos: [], 
	    	user_info: {}
	    }
	}
	
	// fetching data when componentWillMount()
	componentWillMount() {
		// call 3 ajax to get data from 3 feeds

		ajax.get('https://api.github.com/users/nvminhtu/repos')
	        .end((error, response) => { // tell superagent - what to do when requests finish
	            if (!error && response) { // there no errors?
	                this.setState({ user_repos: response.body }); // set respone data -> commits then setState
	                console.dir(response.body); // Debug -> show data -> then we can show data in frontend
	            } else { // if has errors?
	                console.log('There was an error fetching from GitHub', error);
	            }
	        }
	    );

	    ajax.get('https://api.github.com/users/technetup/repos')
	        .end((error, response) => { // tell superagent - what to do when requests finish
	            if (!error && response) { // there no errors?
	                this.setState({ org_repos: response.body }); // set respone data -> commits then setState
	                console.dir(response.body); // Debug -> show data -> then we can show data in frontend
	            } else { // if has errors?
	                console.log('There was an error fetching from GitHub', error);
	            }
	        }
	    );


	    ajax.get('https://api.github.com/users/nvminhtu')
	        .end((error, response) => { // tell superagent - what to do when requests finish
	            if (!error && response) { // there no errors?
	                this.setState({ user_info: response.body }); // set respone data -> commits then setState
	                console.dir(response.body); // Debug -> show data -> then we can show data in frontend
	            } else { // if has errors?
	                console.log('There was an error fetching from GitHub', error);
	            }
	        }
	    );
	}
	
	// render Data qua 3 hàm render riêng lẻ
    renderUserRepos() {
	    return (<div><h1>Respositories of Tu Nguyen</h1>
		    {this.state.user_repos.map((data, index) => {
				
				// trả về dữ liệu hiển thị ra (chúng ta có thể coi trong console.dir)	
		        return (<div key={index}>
			        		<p>
			        			<strong>{data.full_name}</strong><br />{data.description}
			       		   </p>
			       		</div>);
		    })}
		    </div>);
	}
	
	renderOrgRepos() {
	    return (<div><h1>Respositories of Tech Net Up</h1>
		    {this.state.org_repos.map((data, index) => {
				
				// trả về dữ liệu hiển thị ra (chúng ta có thể coi trong console.dir)	
		        return (
		        	<p key={index}>
		            	<strong>{data.full_name}</strong><br />{data.description}
		        	</p>);
		    })}
		    </div>);
	}

	renderUserInfo() {
	    return (<div>
	    			<h1>Tu Nguyen's Information</h1>
		   			<p>Name: {this.state.user_info.name}</p>
		   			<p>Blog: <a href={this.state.user_info.blog}>{this.state.user_info.blog}</a></p> 
		   			<p>Location: {this.state.user_info.location}</p> 
		   			<p>Bio: {this.state.user_info.bio}</p> 
		   			<img src={this.state.user_info.avatar_url} alt=""/>
		   </div>);
	}

	// các hàm xử lý sự kiện đổi State
	showUserRepos() {
    	this.setState({ mode: 'user_repos' });
	}

	showOrgRepos() {
	    this.setState({ mode: 'org_repos' });
	}

	showUserInfo() {
	    this.setState({ mode: 'user_info' });
	}

	// render - check condition before rendering
	render() {
   		let content; // return data đổ vào đây

	    if (this.state.mode === 'user_repos') {
	        content = this.renderUserRepos();
	    } else if (this.state.mode === 'org_repos') {
	        content = this.renderOrgRepos();
	    } else {
	        content = this.renderUserInfo();
	    }
		console.log(this.state.mode);
	    return (<div>
	        <button onClick={this.showUserRepos.bind(this)}>Show Tu Nguyen's Respositories</button>
	        <button onClick={this.showOrgRepos.bind(this)}>Show Technetup's Respositories</button>
	        <button onClick={this.showUserInfo.bind(this)}>Show Tu Nguyen's Information</button>
	        {content}
	    </div>);
	}
}

export default MultiFeeds;