import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import StateWise from "./components/StateWise"
import "./universal.css"

class App extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Navbar />
					<br /> <br />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/statewise" component={StateWise} />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}


}

export default App