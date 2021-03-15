import React , { Component }from 'react';
import { connect } from 'react-redux';
import { fetchCities, fetchFeed, selectCity } from '../actions';

class FeedCities extends Component {

    onClickCity = (city) => {
        this.props.selectCity(city);
        this.props.fetchFeed(city);
    }

    renderList = () => {
        console.log('Selected city is : ' + this.props.selectedCity);
        return this.props.cities.map((city) => {
            return (
                 <div className ="ui link list" key={city.cityId}>
                    <a className ="item" onClick={() => this.onClickCity(city)} >{city.name}</a>
                 </div> 
            )
        })
    }

    componentDidMount(){
        this.props.fetchCities();
    }

    render() {
        return <div><a className ="active item" href="">All</a>{ this.renderList() }</div>
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return { cities: state.cities,
             selectedCity: state.selectedCity}
}

export default connect(mapStateToProps, { fetchCities, fetchFeed, selectCity }) (FeedCities); 