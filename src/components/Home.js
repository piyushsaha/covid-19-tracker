import React from "react"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import Countup from "react-countup"
import "./Home.css"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            indiaCases: null
        }
    }
    componentDidMount() {
        axios.get("https://api.covid19india.org/data.json")
            .then(res => {
                this.setState({
                    indiaCases: res.data.statewise[0]
                })
            })
    }


    render() {
        const india = this.state.indiaCases ? (
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                        <div className="total"><h2>Total</h2>
                            <br />
                            <h3><Countup end={this.state.indiaCases.confirmed} duration={1.5} /></h3>
                        </div>
                        <br /> <br />
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="active"><h2>Active</h2>
                            <br />
                            <h3><Countup end={this.state.indiaCases.active} duration={1.5} /></h3>
                        </div>
                        <br /> <br />
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="recovered"><h2>Recovered</h2>
                            <br />
                            <h3><Countup end={this.state.indiaCases.recovered} duration={1.5} /></h3>

                        </div>
                        <br /> <br />
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="deaths"><h2>Deaths</h2>
                            <br />
                            <h3><Countup end={this.state.indiaCases.deaths} duration={1.5} /></h3>
                        </div>
                        <br /> <br />
                    </Col>
                </Row>
            </Container>
        ) : (
                <p>Loading...</p>
            )
        return (
            <div className="home">
                <div className="title"><h1>Covid-19 cases in India</h1></div>
                <br />
                {india}
            </div>
        )
    }
}

export default Home