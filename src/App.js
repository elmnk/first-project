import './layouts/Page 1/FirstPage';
import {Switch, Route, Redirect, BrowserRouter as Router, Link} from 'react-router-dom'
import FirstPage from './layouts/Page 1/FirstPage';
import SecondPage from './layouts/Page 2/SecondPage';
import ThirdPage from './layouts/Page 3/ThirdPage';
import FourthPage from './layouts/Page 4/FourthPage';
import FifthPage from './layouts/Page 5/FifthPage';
import './styles/NavPanel.css';


function App() {

    const navButtons = [
        {title: 'First', link: '/first'},
        {title: 'Second', link: '/second'},
        {title: 'Third', link: '/third'},
        {title: 'Fourth', link: '/fourth'},
        {title: 'Fifth', link: '/fifth'}
    ];

    return (
        <Router>
            <div className='mainContainer'>
                <div className='navigationPanel'>
                    {
                        navButtons.map((item, index) =>
                            <Link to={item.link} className='myButton'>{item.title}</Link>
                        )
                    }
                </div>

                <Switch>
                    {/**  default screen  */}
                    <Route exact path="/" component={FirstPage}/>

                    {/**  all other pages  */}
                    <Route exact path="/first" component={FirstPage}/>
                    <Route exact path="/second" component={SecondPage}/>
                    <Route exact path="/third" component={ThirdPage}/>
                    <Route exact path="/fourth" component={FourthPage}/>
                    <Route exact path="/fifth" component={FifthPage}/>

                    {/**  redirects to default screen if there is no registered path  */}
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;

