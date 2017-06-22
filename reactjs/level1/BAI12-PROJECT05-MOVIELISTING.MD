# PROJECT 05 - REACT ROUTER - MOVIE LISTING

## Nội dung:
* Tạo 1 SPA (Single Page Application)
* 1 trang có nhiều Router khác nhau

## Step by Step:

### 0. Cài package `create-react-app` để tạo project trong bài này.

```
npm install -g create-react-app
```

* Test thử xem Ok chưa

```
npm run start
``` 

### 1. Chỉnh sửa code như sau và test chạy thử trước

Mặc định Boilerplate của nó, chúng ta cần sửa gom lại

* index.js
```
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

* App.js
```
import React, { Component } from 'react';
import logo from './svg/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Phim mới</h2>
        </div>
      </div>
    );
  }
}

export default App;
```
### 2. Cài đặt React Router

// ví dụ như hiện tại là cài bản version 4.0.0-alpha.4

```
npm install --save react-router@4.0.0-alpha.4 
```

* Sau đó, kiểm tra lại xem các Devdependencies đã có chưa: vào file `package.json`

```
"dependencies": {
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-router": "^4.0.0-alpha.4"
  },
```
Nếu đã thấy các package này thì OK

### 3. Thêm dữ liệu DEMO

* Tạo file movie.json, các Data item khác các bác tự thêm để demo nhé

```
[
    {
        "id": 1,
        "name": "The Hateful Eight",
        "director": "Quentin Tarantino",
        "released": "December 25, 2015",
        "image": "http://resizing.flixster.com/TnduRpSjWsBCj88PlUV5Q2dZX0I=/320x474/v1.bTsxMTI4NTM1NDtqOzE3MjE0OzIwNDg7ODEwMDsxMjAwMA",
        "description": "Set six or eight or twelve years after the Civil War, a stagecoach hurtles through the wintry Wyoming landscape. The passengers, bounty hunter John Ruth and his fugitive Daisy Domergue, race towards the town of Red Rock where Ruth, known in these parts as The Hangman, will bring Domergue to justice. Along the road, they encounter two strangers: Major Marquis Warren, a black former union soldier turned infamous bounty hunter, and Chris Mannix, a southern renegade who claims to be the town's new Sheriff. Losing their lead on the blizzard, Ruth, Domergue, Warren and Mannix seek refuge at Minnie's Haberdashery, a stagecoach stopover on a mountain pass. When they arrive at Minnie's, they are greeted not by the proprietor but by four unfamiliar faces. Bob, who's taking care of Minnie's while she's visiting her mother, is holed up with Oswaldo Mobray, the hangman of Red Rock, cow-puncher Joe Gage (Madsen), and Confederate General Sanford Smithers. As the storm overtakes the mountainside stopover, our eight travelers come to learn they may not make it to Red Rock after all...",
        "reviews": [
            {
                "title": "Hated it",
                "body": "This movie is dumb!",
                "author": "John Pete"
            }
        ]
    },
    {
        "id": 2,
        "name": "Reservoir Dogs",
        "director": "Quentin Tarantino",
        "released": "October 23, 1992",
        "image": "http://resizing.flixster.com/kQvsg7IIyBcfWZ9cXOKIiDTIteY=/320x480/v1.bTsxMTE3NzYzMjtqOzE3MjIxOzIwNDg7ODAwOzEyMDA",
        "description": "In 1992, Reservoir Dogs transformed Quentin Tarantino practically overnight from an obscure, unproduced screenwriter and part-time actor to the most influential new filmmaker of the 1990s. The story looks at what happens before and after (but not during) a botched jewelry store robbery organized by Joe Cabot (Lawrence Tierney). Mr. White (Harvey Keitel) is a career criminal who takes a liking to newcomer Mr. Orange (Tim Roth) and enjoys showing him the ropes. Mr. Pink (Steve Buscemi) is a weaselly loner obsessed with professionalism. Mr. Blonde (Michael Madsen) has just gotten out of jail after taking the rap on a job for Cabot; he's grateful for the work but isn't the same person he used to be. While Mr. Blonde goes nuts during the heist, the thieves are surprised by the sudden arrival of the police, and Mr. Pink is convinced one of their team is a cop. So who's the rat? What do they do about Mr. Blonde? And what do they do with Mr. Orange, who took a bullet in the gut and is slowly bleeding to death? Reservoir Dogs jumps back and forth between pre- and post-robbery events, occasionally putting the narrative on pause to let the characters discuss such topics as the relative importance of tipping, who starred in Get Christie Love!, and what to do when you enter a men's room full of cops carrying a briefcase full of marijuana. ~ Mark Deming, Rovi",
        "reviews": [
            {
                "title": "Tarantino does it again!",
                "body": "If this movie got stuck in our laserdisk player, I wouldn't mind!",
                "author": "Rex Guy"
            }
        ]
    }
]
```

* Import vào file `App.js` của chúng ta.

```
import React from 'react';
import movies from '../movies.json';
```

### 4. Tùy chỉnh giao diện trang HOME

#### Yêu cầu:

* Trang chủ show 4 phim (TOP 4 phim)
* Mỗi một phim ta đặt tên là: FeaturedMovie => cần tạo Component `FeaturedMovie`

### App.js

```
import React from 'react';
import movies from '../movies.json';
import FeaturedMovie from './FeaturedMovie';

const Home = () => {
  const topFour = movies.slice(0, 4);

  return (
    <div>
      <h2 className="featured-movies__header">
        Featured Movies
      </h2>

      <hr />

      <div className="featured-movies">
        {topFour.map((movie, i) => (
          <FeaturedMovie
            movie={movie}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
```

* Sau khi tạo xong Component: Home.
* Chúng ta cần show Component Home này ở App.js

Sửa lại và import Router, Match, Link vào
```
import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Phim hay</h2>
            <Link to="/">Home</Link>
          </div>

          <div className="container">
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/movies/movie:Id" component={Movie} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
```

Trong React Router chia ra, để nguyên nội dung nguyên bản tiếng Anh các bạn tự coi.

```
<BrowserRouter>: Keeps UI in sync with the browser history.
<Link>: Provides declarative navigation around the application.
<Match>: Renders UI when the pattern matches the location.
```

* <BrowserRouter> : Ok, để tương tác với browser ta cần khai báo cái này để UI có thể tương tác với Browser.
* <Link>: Để điểu hướng Browser của chúng ta tới `/`
* <Match>: chỉ định Component sẽ render tới khi chỉ định pattern nào: ví dụ ở trên là `/`

### 5. Thêm trang phim chi tiết. (Movies và Movie/${movie.id})

* Giờ đẹp rồi, nếu muốn xem chi tiết 1 phim => ví dụ click vào coi phim thì làm thế nào? => cần tạo 1 trang phim chi tiết.

* Đầu tiên ta cứ khai báo pattern cho nó đã
```
<Match pattern="/movies/:movieId" component={Movie} />
```

* Khoan hãy tạo Component `Movie.js`, ta tạo link cho nó để ở trang Home có thể link tới trang chi tiết => Ok, vậy chỉnh trong file FeaturedMovie.js

Import Link từ React Router
```
import Link from 'react-router/Link';
```

Thêm liên kết tới theo id truyền vào ở đây ta xài Template String (ES6) để gắn biến `movie.id` vào.

```
<Link to={`/movies/${movie.id}`}>
  <img alt={movie.name} src={movie.image} />
</Link>
``` 

* Việc tiếp theo là tạo 1 Component đặt tên là `Movie.js`, Component này đơn giản là liệt kê tất cả Movie ra

```
import React from 'react';
import Link from 'react-router/Link';
import movies from '../movies.json';

const Movies = () => (
  <div>
    <h2 className="movies-header">
      Movies
    </h2>

    <hr />

    <div className="movie-listings">
      {movies.map((movie, i) => (
        <div key={i}>
          <div className="movie-image">
            <Link to={`/movies/${movie.id}`}>
              <img alt={movie.name} src={movie.image} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Movies;

```

### 6. Thêm các tính năng khác, ví dụ như không tìm thấy trang/địa chỉ của trang mà User cần tìm kiếm => Page not found

* React Router có hỗ trợ ko? => Có, React Router hỗ trợ <Miss>

* Làm sao khai báo và sử dụng? => OK, tương tự như các <Router>, <Match>, <Link>, chúng ta cũng cần chỉ định Component của <Miss>

* Trong App.js chúng ta chỉnh sửa lại code như sau:

```
...
import Home from './components/Home';
import Movie from './components/Movie';
import Movies from './components/Movies';
import PageNotFound from './components/PageNotFound'; // import of new component

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import Miss from 'react-router/Miss'; // import react-router's Miss component
...

<div className="container">
  <Match exactly pattern="/" component={Home} />
  <Match exactly pattern="/movies" component={Movies} />
  <Match pattern="/movies/:movieId" component={Movie} />

  <Miss component={PageNotFound} /> // add Miss component with our PageNotFound component
</div>

....
```

* Dĩ nhiên là cần tạo 1 template cho `Page Not Found` - tạo 1 Component đơn giản với vài dòng sau

```
import React from 'react';

const PageNotFound = () => (
  <div className="page-not-found">
    404 - Xin lỗi, trang bạn kiếm không tồn tại!
  </div>
);

export default PageNotFound;
```

## Vậy là xong rùi đó, xem thêm những kiến thức khác - tổng hợp để làm bài này?

* [Mozilla Developer](https://developer.mozilla.org/en-US/) - chuyên mục Javascript, kiên thức javascript cơ bản
* [Create React App](https://github.com/facebookincubator/create-react-app) - Package tạo project React đơn giản - không cần config nhiều 
* [React Router](https://github.com/ReactTraining/react-router) - Để Routing app cần chú này(BrowserRouter, <Link>, <Match>, <Miss>)
[Coi thêm về .map() javascript](https://www.discovermeteor.com/blog/understanding-javascript-map/)
* [Các hướng dẫn của React Router khác](https://reacttraining.com/react-router/web/example/url-params) 

* Lưu ý: Đang làm việc với React Router v4, 1 số guide của các bài khác có thể ko chạy do version mới ko còn support....v.v.

## Source code 
* [Link source code hoàn thiện](https://github.com/nvminhtu/React/tree/master/reactjs/project05)
