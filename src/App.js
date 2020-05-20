import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Worldwide from "./components/Worldwide"
import "./universal.css"

class App extends React.Component {
	render() {
		return (
			<div>
				<HashRouter>
					<Navbar />
					<br /> <br />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/worldwide" component={Worldwide} />
					</Switch>
				</HashRouter>
			</div>
		)
	}


}

export default App