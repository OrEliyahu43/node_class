import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { API } from './api/weatherApi';
function App() {

  const [city,setCity] = useState('');
  const [weather,setWeather] = useState(null);
  const handleChange = ({target}) => {

    setCity(target.value)
  }

  const handleClick = async () => {
    try{  
      const {data} = await API.get(city);
      console.log(data)
      setWeather(data.K)
    }catch(err){
      console.log(err)
    }

  }

  return (
    <div className="App">
      <input value={city} onChange={handleChange}/>
      <button onClick={handleClick}> get weather</button>
      {weather && <h1>temp : {weather}</h1> }
    </div>
  );
}

export default App;
