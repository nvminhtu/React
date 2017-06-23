import React from 'react';

import update from 'react-addons-update'; // hoặc sử dụng cái mới nhất: import update from 'immutability-helper';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import IconLogo from './svg/logo.svg';
import IconCheck from './svg/icon-check.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    // khởi tạo các state cần sử dụng đến
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0
      },
      result: ''
    };

    // đặt hàm khai báo bind() ở đây để performance của app tốt nhất
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {

    // đổ data từ 1 mảng khai báo trong API vào -> thay đổi thứ tự câu trả lời 1 cách ngẫu nhiên
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question, // Lấy question đầu tiên trong mảng quizQuestion đã khai báo ở /api/quizQuestion
      answerOptions: shuffledAnswerOptions[0]
    });
    
  }

  // hàm này giúp thay đổi ngẫu nhiên thứ tự các phần tử
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
        //this.setNextQuestion();
    } else {
        //this.getResults();
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1} // cách viết này là của react-update-addon (nay có thể thay = immutability-helper )
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Quiz </h2>
          <div style={{width: '100px',margin:'0px auto'}}><IconLogo /></div>
          
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;