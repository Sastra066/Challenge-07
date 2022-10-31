import logo from '../../logo.svg';
import '../../App.css';
import Nav from '../navbar';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="App">
        <Nav/>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to='/' className="App-link">Home</Link>
        </header>
    </div>
  );
}

export default About;
