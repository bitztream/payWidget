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
					return res.json();
					},
					(error) => {
						console.log(error);
					},
					)
			.then((data) => {
				 this.setState({
				 merchandise: data,
					});
			console.log(this.state.merchandise);
	});
	}

  render() {
				const { merchandise } = this.state;
				return (
						<div>
								<Widget
								  pics={merchandise.item.imgs}
										picDis={merchandise.item.itemNames}
										prices={merchandise.item.prices}
								/>
						</div>
				);
			}
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
