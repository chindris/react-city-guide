import React from 'react';
import Attraction from './Attraction';
import {connect} from 'react-redux';

class AttractionsList extends Component {
  render() {
    const attractions = this.props.attractions;
    return(
      <div>
        {
          attractions.map((attraction) => (
            <Attraction key={attraction.id} attraction={attraction} />
          ))
        }
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    attractions: state.attractions
  }
}

export default connect(mapStateToProps)(AttractionsList);
