import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // StrictMode: 严格模式，检验你写的代码中有没有比较老旧的写法或者 Api 如果 stringRef 这种快不被支持的东西，就会报错，但是只是在开发环境下会报错，生产环境是不会的
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />,
  document.getElementById('root')
);


