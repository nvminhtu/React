// Component: MultiFeeds
import React from 'react';
import Chance from 'chance';
import ajax from 'superagent';

// https://github.com/nvminhtu/React
// Do github source của ReactJS đang làm quá ít commits, pulls và forks cho nên sử dụng cái `design-sprint`

// https://developer.github.com/v3/repos/#get-branc
// https://api.github.com/repos/thoughtbot/design-sprint/commits
// https://api.github.com/repos/thoughtbot/design-sprint/pulls
// https://api.github.com/repos/thoughtbot/design-sprint/forks

class Minimize extends React.Component {
   
	// constructor
	constructor(props) {
		super(props);
	    this.state = {
	    	mode: 'commits',
	    	commits: [],
	    	pulls: [], 
	    	forks: []
	    }
	}
	
	
	// fetching data
	componentWillMount() {
	    this.fetchFeed('commits');
	    this.fetchFeed('forks');
	    this.fetchFeed('pulls');
	}

	// call ajax via type - parameter (type có thể là pulls/commits/forks)
	fetchFeed(type) {
		ajax.get(`https://api.github.com/repos/thoughtbot/design-sprint/${type}`)
		        .end((error, response) => {
		            if (!error && response) {
		                this.setState({ [type]: response.body });
		            } else {
		                console.log(`Error fetching ${type}`, error);
		            }
		        }
		);
	}

	// render Data qua 3 hàm render riêng lẻ
    renderCommits() {
	    return (<div><h1>Commits of React Repos</h1>
		    {this.state.commits.map((data, index) => {
				
				// trả về dữ liệu hiển thị ra (chúng ta có thể coi trong console.dir)	
		        // kiểm tra author của Github trước
		        const author = data.author ? data.author.login : 'Anonymous'; 

				// trả về dữ liệu hiển thị ra (chúng ta có thể coi trong console.dir)	
		        return (<p key={index}>
		            <strong>{author}</strong>: <a href={data.html_url}>{data.commit.message}</a>.
		        </p>);
		    })}
		    </div>);
	}
	
	renderPulls() {
	    return (<div><h1>Pulls of React Repos</h1>
		    {this.state.pulls.map((data, index) => {
				
				// trả về dữ liệu hiển thị ra (chúng ta có thể coi trong console.dir)	
		        return (<div key={index}><p>
		            <strong>{data.title}</strong>: {data.body}
		        </p>
		        <p>{data.created_at}</p></div>);
		    })}
		    </div>);
	}

	renderforks() {
	    return (<div><h1>forks of React Repos</h1>
		    {this.state.forks.map((data, index) => {
				
		        return (
		        	<div key={index}><p>
		            	<strong>{data.full_name}</strong><br />{data.description}
		        	</p>
                    <p>{data.full_name}</p>
		        	</div>);
		    })}
		    </div>);
	}

	// các hàm xử lý sự kiện đổi State
/*	showCommits() {
    	this.setState({ mode: 'commits' });
	}

	showPulls() {
	    this.setState({ mode: 'pulls' });
	}

	showForks() {
	    this.setState({ mode: 'forks' });
	} */

	// gom 3 hàm trên lại thành 1 để quản lý mode
	/* selectMode(mode) {
		this.setState({ mode });
	} */
	
	selectMopde(event) {
		console.log(event);
		//this.setState ({ mode: event.currentTarget.dataset.mode });
	}

	// render - check condition before rendering
	render() {
   		let content; // return data đổ vào đây

	    if (this.state.mode === 'commits') {
	        content = this.renderCommits();
	    } else if (this.state.mode === 'pulls') {
	        content = this.renderPulls();
	    } else {
	        content = this.renderforks();
	    }
		console.log(this.state.mode);
	    /* return (<div>
	        <button onClick={this.selectMode.bind(this,'commits')}>Show Commits</button>
	        <button onClick={this.selectMode.bind(this,'pulls')}>Show Pulls</button>
	        <button onClick={this.selectMode.bind(this,'forks')}>Show forks</button>
	        {content}
	    </div>); */
	    return (<div>
	        <button onClick={this.selectMode.bind(this)} data-mode="commits">Show Commits</button>
	        <button onClick={this.selectMode.bind(this)} data-mode="pulls">Show Pulls</button>
	        <button onClick={this.selectMode.bind(this)} data-mode="forks">Show forks</button>
	        {content}
	    </div>);
	}
}

export default Minimize;