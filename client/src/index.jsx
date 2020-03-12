import Form from './components/Form.jsx.js';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
	}

	componentDidMount() {
		console.log('here from client index')
	}
	
	render() {
		return (
			<div> 
				<p>app component here</p>
				<Form />
			</div>
		)
	}
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);