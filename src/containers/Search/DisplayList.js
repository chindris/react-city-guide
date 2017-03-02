import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DisplayList extends Component {
  render() {
    let rows = [];
    this.props.data.forEach(attraction => {
      rows.push(
        <tr>
          <td>
            {attraction.name}
          </td>
          <td>
            {attraction.description}
          </td>
        </tr>
      )
    })

    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
