import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Worldwide from "./components/Worldwide"
import "./universal.css"
import Footer from "./components/Footer"

class App extends React.Component {
	render() {
		return (
			<div>
				<HashRouter basename="/">
					<Navbar />
					<br /> <br />
					<Switch>
						<Route excat path="/" component={Home} />
						<Route path="/worldwide" component={Worldwide} />
					</Switch>
					<Footer />
				</HashRouter>
			</div>
		)
	}


}

export default App