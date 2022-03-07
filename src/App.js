import Page1 from '../src/pages/Page1';
import Page2 from '../src/pages/Page2';
import Page3 from '../src/pages/Page3';
import Page4 from '../src/pages/page4';
import PageBook from '../src/pages/PageBook';

import './App.css';

function App() {
  return (
    <div className="App">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <PageBook />
      {/* <header className="App-header">
        <h1>hello mellops</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
