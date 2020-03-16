import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Form from './components/Form.jsx';
import CheckboxWithLabel from './components/check.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
			merchandise: 'who',
    };
  }
	// http://localhost:3000
  componentDidMount() {
		this.get();
	}




	get() {
		fetch("http://localhost:3000/get")
		.then(
			(res) => {				
				return res.json()
				},
				(error) => {
					console.log(error)
				})
		.then((data)=> console.log(data))	
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
