//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
const Counter = properties => {
	let numbersArray = properties.number.split("");
	const howManyCeros = 9 - numbersArray.length;
	for (let i = 0; i < howManyCeros; i++) {
		numbersArray.splice(0, 0, "0");
	}

	return (
		<h1 className="d-flex container bigCounter bg-gray">
			<div className="Clock">
				<i className="far fa-clock" />
			</div>
			{numbersArray.map((num, i) => (
				<div key={i}>{num}</div>
			))}
		</h1>
	);
};

//render your react application
let number = 0;
setInterval(() => {
	number = number + 1;
	ReactDOM.render(
		<Counter number={number.toString()} />,
		document.querySelector("#app")
	);
}, 1000);
