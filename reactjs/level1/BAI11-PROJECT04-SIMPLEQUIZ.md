# PROJECT 04 - Thử nghiệm 1 simple Quiz

## Nội dung:
* Tạo 1 quiz đơn giản - bao gồm các câu hỏi và trả lời

## Step by Step:

### 1. Tạo cấu trúc (folder project).
### 2. Tạo các Component (React phân nhỏ công việc = Component)
* Question
* Question count
* Answer options
* Result

### 3. Tạo 1 API (json data mẫu)
### 4. Tùy chỉnh Style

### Coding (Step by Step)

* Tạo Project tương tự project 2,3 => Sửa lại file index.js như dưới đây 
```
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, world</h1>;
ReactDOM.render(
	element,
    document.getElementById('app')
);
```
* Test thử OK, - tạo cấu trúc thư mục như dưới đây:
```
  react-quiz/
   README.md
   index.html
   favicon.ico
   node_modules/
   package.json  /* Giống các Project 2 và 3 */
   webpack.config.js  /* Giống các Project 2 và 3 */
   dist/
   src/
   	api/
   	components/
   	svg/
   		 logo.svg
   		 icon-check.svg
    App.css
    App.js
    index.css
    index.js
    favicon.ico
```

> Các file svg thì tải trong source code mẫu bỏ vào folder src/svg
> File favicon.ico bỏ vào trong src/

* Tạo 1 folder `api`, tạo 1 file json đặt trong đó nội dung như sau:

```
var quizQuestions = [
  {
      question: "What franchise would you rather play a game from?",
      answers: [
          {
              type: "Microsoft",
              content: "Halo"
          },
          {
              type: "Nintendo",
              content: "Pokemon"
          },
          {
              type: "Sony",
              content: "Uncharted"
          }
      ]
  },
  {
      question: "Which console would you prefer to play with friends?",
      answers: [
          {
              type: "Microsoft",
              content: "X-Box"
          },
          {
              type: "Nintendo",
              content: "Nintendo 64"
          },
          {
              type: "Sony",
              content: "Playstation 1"
          }
      ]
  },
  {
      question: "Which of these racing franchises would you prefer to play a game from?",
      answers: [
          {
              type: "Microsoft",
              content: "Forza"
          },
          {
              type: "Nintendo",
              content: "Mario Kart"
          },
          {
              type: "Sony",
              content: "Gran Turismo"
          }
      ]
  },
  {
      question: "Which of these games do you think is best?",
      answers: [
          {
              type: "Microsoft",
              content: "BioShock"
          },
          {
              type: "Nintendo",
              content: "The Legend of Zelda: Ocarina of Time"
          },
          {
              type: "Sony",
              content: "Final Fantasy VII"
          }
      ]
  },
  {
      question: "What console would you prefer to own?",
      answers: [
          {
              type: "Microsoft",
              content: "X-Box One"
          },
          {
              type: "Nintendo",
              content: "Wii U"
          },
          {
              type: "Sony",
              content: "Playstation 4"
          }
      ]
  }
];

export default quizQuestions;
```

* Tạo Các Component:
* 1. Question.
```
  + Question là 1 item => nên dùng dạng stateless component
  [Tham khảo thêm ở đây về stateless compoent](https://facebook.github.io/react/docs/components-and-props.html)
```

* Tạo 1 file trong folder src/components/Question.js
```
import React from 'react';

function Question(props) {
  return (
    <h2 className="question">{props.content}</h2>
  );
}

// typechecking

Question.PropTypes = {
  content: React.PropTypes.string.isRequired
}

export default Questions;
```

* Tiếp đến là sử dụng `Question` trong App - tạo file: /src/App.js

Cần hiểu về:

* Phân biệt `presentational` và `container` components.
* Ở phía trên ta đã khai báo 1 Question -> cần sử dụng trong App.js -> App.js sẽ là 1 container component
* Dùng để sử dụng trong các component khác như là 1 item nên ta code 

#### Xem thêm các kiến thức tại đây:
* [Container Component - tìm hiểu và phân biệt](https://codepen.io/chantastic/pen/Qpeevw?editors=0010)
* [Phân biệt Container Component và Presentation Component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)


* Source code App.js như sau:

```
import React from 'react';
import Question from './components/Question';

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Quiz</h2>
        </div>
        <Question content="What is your favourite food?" />
      </div>
    );
  }
  

}

export default App;
```
Test thử những code trên để hiểu cách xài <Question /> trong <App />

* 2. Question Count
Tạo 1 file đặt ở /components/QuestionCount.js

```
/* presentation component */

import React from 'react';

function QuestionCount(props) {
  return (
    <div className="QuestionCount">
      Question <span>{ props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

QuestionCount.PropTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
}

export default QuestionCount;
```

* 3. Answer Question
Tạo 1 file đặt ở /compoents/AnswerOptions.js

```
import React from 'react';

  function AnswerOption(props) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    );
  }

  AnswerOption.propTypes = {
    answerType: React.PropTypes.string.isRequired,
    answerContent: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
  };

  export default AnswerOption;
```

* Gom 3 Component vừa tạo vào trong 1 Component => đặt tên là <Quiz /> (khai báo theo kiểu presentation Component luôn)

```
import React from './react';

import Question from './components/Question.js';
import AnswerOptions from './components/AnswerOptions.js';
import QuestionCount from './components/QuestionCount.js';

function Quiz(props) {
  return (
    <div className="Quiz">
      <QuestionCount
        counter = props.questionId
        total = props.questionTotal
      />
      <Question content= props.question />
      <ul className="answerOptions">
        {props.answerQuestion.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

Quiz.propTypes = {
    answer: React.PropTypes.string.isRequired,
    answerOptions: React.PropTypes.array.isRequired,
    counter: React.PropTypes.number.isRequired,
    question: React.PropTypes.string.isRequired,
    questionId: React.PropTypes.number.isRequired,
    questionTotal: React.PropTypes.number.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
  };

export default Quiz;
```
------- Phần hướng dãn sẽ cập nhật thêm sau, anh em có thể xem code để hiểu và hỏi.

### Các bài viết tham khảo thêm để làm
[Sử dụng SVG logo như 1 Component với ReactJS và Webpack](https://diessi.ca/blog/svg-images-as-react-components-with-webpack/)

[Container Component - tìm hiểu và phân biệt](https://codepen.io/chantastic/pen/Qpeevw?editors=0010)

[Phân biệt Container Component và Presentation Component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

[Tham khảo thêm ở đây về stateless compoent](https://facebook.github.io/react/docs/components-and-props.html)

[Tìm hiểu về Filter trong Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=example)
