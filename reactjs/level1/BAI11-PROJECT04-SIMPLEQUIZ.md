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

### Các bài viết tham khảo thêm để làm
[Sử dụng SVG logo như 1 Component với ReactJS và Webpack](https://diessi.ca/blog/svg-images-as-react-components-with-webpack/)