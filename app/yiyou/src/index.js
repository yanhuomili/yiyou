import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//引入axios模块，用于接口请求数据
//import axios from 'axios';



//引入手机端适配文件
import './static/js/rem.js';

//引入antd-mobile框架样式文件
import 'antd-mobile/dist/antd-mobile.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
