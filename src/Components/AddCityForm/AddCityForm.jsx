import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddCity(this.state.city);
  }
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input className="form-control" name="city" value={this.state.city} onChange={this.onFieldChange} placeholder="Add City" />
          <button className="input-group-text" type="submit">+</button>
        </div>
      </form>
    );
  }
}

function AddCityForm({onAddCity}) {
  return <CityForm onAddCity={onAddCity} />;
}

function mapDispatchToProps(dispatch) {
  return {
    onAddCity: (city) => {
      dispatch({ type: 'ADD_CITY', city });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddCityForm);
