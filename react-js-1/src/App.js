import './App.css';

import ChildComponent1 from './components/ChildComponent1/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2'
import Counter from './components/Counter';

const App = () => {
  return (<>
    <div className="App">
     We are learing React
     <ChildComponent1/>
     <ChildComponent2/>
     <Counter/>
    <br/>
    React is Awesome

    </div>

    </>
  );
}

export default App;
/*

*/