import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import CheckboxWithLabel from './components/check.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    console.log('here from client index');
  }

  render() {
    return (
      <div>
        <p>app component here</p>
        <Form />
				<CheckboxWithLabel />
				
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
