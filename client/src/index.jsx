import React from 'react';
import ReactDOM from 'react-dom';
import item1 from '../../helper/useSeed.js';
import Widget from './components/widget.jsx';

class App extends React.Component {
	constructor() {
   super();
     this.state = {
					merchandise: item1,
					pics: item1.item.imgs,
					picDis: item1.item.itemNames,
					prices: item1.item.prices,
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
				const { pics, picDis, prices } = this.state;
				return (
						<div>
								<Widget
								  pics={pics}
										picDis={picDis}
										prices={prices}
								/>
						</div>
				);
			}
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
