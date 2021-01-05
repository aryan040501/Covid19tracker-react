import React from 'react';
import { fetchData } from '../../index';
import Cards from '../Cards/Cards';
import Chart from '../Chart/Chart';
import CountryPicker from '../CountryPicker/CountryPicker';

class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }


  render() {
    const { data,country} = this.state;

    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;