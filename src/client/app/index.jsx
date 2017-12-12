import React from 'react';
import {render} from 'react-dom';
import {Game} from './AwesomeComponent.jsx';
import '../../client/index.css'

// ...
class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React Project</p>
        <Game/>
      </div>
    );
  }
}

// ...

render(<App/>, document.getElementById('root'));