import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'


class BeerContainer extends Component {

state = {
    beers: [],
    clickedOnBeers: [],
    searchTerm : ''
}


componentDidMount(){
    fetch('http://localhost:3001/beers')
    .then(res => res.json())
    .then(allBeers => {
        this.setState({
            beers: allBeers
        })
    })
}



handleClick = (id) => {
    let copyOfBeers = [...this.state.beers]

    let foundBeer = copyOfBeers.find(beer => beer.id === id)

    this.setState({
        clickedOnBeers: foundBeer
    })

}


handleSearch = (e) => {

    // let copyOfBeers = [...this.state.beers]

    this.setState = {
        searchTerm: e.target.value
    }

    console.log(this.state.searchTerm)

    // const filteredBeers = copyOfBeers.filter(beer => {
    //     return beer.name.include === e.target.value
    // })

}


  render() {

      const arrayOfBeerNames = this.state.beers.map(beer =>
           <BeerItem beer={beer} handleClick={this.handleClick}/>)


    return (
      <div>
        <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
        <br />
        <ul className="container">{arrayOfBeerNames}</ul>
        <BeerDetail beer={this.state.clickedOnBeers}/>
      </div>
    );
  }
}

export default BeerContainer;
