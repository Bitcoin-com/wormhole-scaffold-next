import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
let Wormhole = require('wormholecash/lib/Wormhole').default;
let wormhole = new Wormhole();

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src='static/logo.png' className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Wormhole</h1>
        </header>
      </div>
    );
  }
}

export default Index;
