var React = require('react');
var request = require('superagent');

var ColonyForm = React.createClass({
  render: function() {
    return (
      <div className="vol__formContainer">
        <form onSubmit={this._handleSubmit}>
          <div className="volForm__label">
            <label htmlFor="name" className="volForm__label">Name: </label>
            <input ref="name" id="name" placeholder="" />
          </div>
          <div className="volForm__label">
            <label htmlFor="photo" className="volForm__label">Photo: </label>
            <input ref="photo" id="photo" placeholder=" photo url" />
          </div>
          <div className="volForm__label">
            <label htmlFor="street_address" className="volForm__label"> Street Address: </label>
            <input ref="streetAddress" id="street_address" placeholder="" />
          </div>
          <div className="volForm__label">
            <label htmlFor="city" className="volForm__label"> City: </label>
            <input ref="city" id="city" placeholder="" />
          </div>
          <div className="volForm__label">
            <label htmlFor="state" className="volForm__label"> State: </label>
            <input ref="state" id="state" placeholder="" />
          </div>
          <div className="volForm__label">
            <label htmlFor="zip_code" className="volForm__label"> Zip Code: </label>
            <input ref="zipCode" id="zip_code" placeholder=" " />
          </div>
          <div className="volForm__label">
            <label htmlFor="environment" className="volForm__label"> Environment: </label>
            <input ref="environment" id="environment" placeholder=" wooded, industrial, residential, etc."/>
          </div>
          <div className="volForm__label">
            <label htmlFor="pop" className="volForm__label"> Population: </label>
            <input ref="pop" id="pop" placeholder=" aprox. number of colony members"/>
          </div>
          <div className="volForm__label">
            <label htmlFor="vet" className="volForm__label"> Vet: </label>
            <input ref="vet" id="vet" placeholder=" if applicable"/>
          </div>
          <div className="volForm__submit">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  },
  _createColony: function(data) {
    request
      .post('/colonies')
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._handleChange)
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      colony: {
        name: this.refs.name.getDOMNode().value.trim(),
        photo: this.refs.photo.getDOMNode().value.trim(),
        street_address: this.refs.streetAddress.getDOMNode().value,
        city: this.refs.city.getDOMNode().value.trim(),
        state: this.refs.state.getDOMNode().value.trim(),
        zip_code: this.refs.zipCode.getDOMNode().value.trim(),
        environment: this.refs.environment.getDOMNode().value.trim(),
        pop: this.refs.pop.getDOMNode().value.trim(),
        vet: this.refs.vet.getDOMNode().value.trim()
      }
    };
    this._createColony(data);
  }

});

module.exports = ColonyForm;
