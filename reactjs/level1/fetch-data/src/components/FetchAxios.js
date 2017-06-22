import React from 'react';
import axios from 'axios';

class FetchAxios extends React.Component {
	constructor(props) {
	    super(props);

		this.state = {
	      posts: []
	    };
  }

  componentDidMount() {
  	axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
  	let url_fetch = `http://www.reddit.com/r/`;
    return (
      <div>
        <h1>{`${url_fetch}${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default FetchAxios;