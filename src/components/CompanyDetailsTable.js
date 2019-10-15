import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants';

export default class CompanyDetailsTable extends React.Component {

    state = {
        id: '',
        data: []
    }

    componentDidMount() {
        const id = this.props.match.params.invoiceId;

        console.log(id);
        fetch(`${BASE_URL}/company/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(error => this.setState({ data: null }));
    }

    render() {
        return (
            <div>
                <div className="btn-messages">
                    <BackButton />
                </div>
                <TableContent data={this.state.data} />
            </div>
        )
    }

}

const BackButton = () => {
    return (
        <Link to="/companies">
            <button className="btn btn-primary btn-back">Back</button>
        </Link>
    )
}
const TableContent = (props) => {
    return (
        <div>
            {props.data !== null ?
                <div>
                    <div className="company-table">
                        <h2 className="company-name" > Company: Google </h2>
                        <table role="presentation" aria-hidden="true" align="center" >
                            <tbody>
                                <tr className="header-row">
                                    <th>Employee ID </th>
                                    <th>Number of Hours</th>
                                    <th>Unit Price</th>
                                    <th>Cost</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {props.data.map((companyDetails, i) => {
                                    return (
                                        <tr key={i}>
                                            <td> {companyDetails.employeeId} </td>
                                            <td>{companyDetails.numberOfHours}</td>
                                            <td>{companyDetails.unitPrice}</td>
                                            <td>{companyDetails.cost}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                            <tbody>
                                <tr className="total-row">
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td>2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                : "loading"
            }
        </div >
    )
}