import './layouts/Page 1/FirstPage';
import { Switch, Route, BrowserRouter as Router, Link, } from 'react-router-dom'
import FirstPage from './layouts/Page 1/FirstPage';
import SecondPage from './layouts/Page 2/SecondPage';
import ThirdPage from './layouts/Page 3/ThirdPage';
import FourthPage from './layouts/Page 4/FourthPage';
import FifthPage from './layouts/Page 5/FifthPage';
import './styles/NavPanel.css';


function App(props) {
  return (
    <Router>
      <div className='navigationPanel'>
        <Link to='/first' className='myButton'>First</Link>
        <Link to='/second' className='myButton'>Second</Link>
        <Link to='/third' className='myButton'>Third</Link>
        <Link to='/fourth' className='myButton'>Fourth</Link>
        <Link to='/fifth' className='myButton'>Fifth</Link>
      </div>

      <Switch>
        <Route exact path="/first" component={FirstPage} />
        <Route path="/second" component={SecondPage} />
        <Route path="/third" component={ThirdPage} />
        <Route path="/fourth" component={FourthPage} />
        <Route path="/fifth" component={FifthPage} />
      </Switch>
    </Router>

  );
}

export default App;

