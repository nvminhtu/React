import React from 'react';
import ReactDOM from 'react-dom';

// import Detail from './pages/Detail.js';
// import Cat from './others/Cat';

import MyTitle from './pages/Bai11.js';


var data = 11;

ReactDOM.render(

    //<Detail message="Hello React developers!" />,
    // <Cat />,


    // Bai 11
    //<MyTitle title={data} />,

    // Bai 11 với giá trị mặc định
    <MyTitle />,
    document.getElementById('app')
);
