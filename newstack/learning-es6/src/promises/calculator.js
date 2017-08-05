// @flow

class Calculator {

  timeout(duration = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    })
  }

  testTimeout() {
    let p = timeout(1000).then(() => {
      return timeout(2000);
    }).then(() => {
      throw new Error("hmm");
    }).catch(err => {
      return Promise.all([timeout(100), timeout(200)]);
    })
  }
}

export default Calculator
