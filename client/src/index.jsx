import React from 'react';
import ReactDOM from 'react-dom';
import item1 from '../../helper/useSeed.js';
import Widget from './components/widget.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
			merchandise: item1,
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
		.then((data) => {this.setState({
			merchandise: data,
		})
		console.log('hey')
		console.log(this.state.merchandise)
	})	
	}
  

  render() {
    return (
      <div>
        <Widget />
        {/* {this.state.merchandise.item.streamName}
        {this.state.merchandise.item.designerName}
        {this.state.merchandise.item.itemNames}
        {this.state.merchandise.item.prices}
        {this.state.merchandise.item.imgs} */}
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
