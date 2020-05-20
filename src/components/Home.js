import React from "react"
import axios from "axios"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import Countup from "react-countup"
import "./Home.css"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            indiaCases: null,
            states: []
        }
    }
    componentDidMount() {
        axios.get("https://api.covid19india.org/data.json")
            .then(res => {
                this.setState({
                    indiaCases: res.data.statewise[0],
                    states: res.data.statewise.slice(1, res.data.statewise.length)
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
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )

        const stateTable = this.state.states ? (
            this.state.states.map(cstate => {
                return (
                    <tr className="data">
                        <td className="state">{cstate.state}</td>
                        <td className="total">{cstate.confirmed}</td>
                        <td className="active">{cstate.active}</td>
                        <td className="recovered">{cstate.recovered}</td>
                        <td className="deaths">{cstate.deaths}</td>
                    </tr>
                )
            })
        ) : (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner >
            )


        return (
            <div className="home">
                <div className="title"><h1>Covid-19 cases in India</h1></div>
                <br />
                {india}
                <br />
                <table className="statesCases">
                    <tr>
                        <th className="state state-t">state</th>
                        <th className="total total-t">total</th>
                        <th className="active active-t">active</th>
                        <th className="recovered recovered-t">recovered</th>
                        <th className="deaths deaths-t">deaths</th>
                    </tr>
                    <br />
                    {stateTable}
                </table>
            </div>
        )
    }
}

export default Home