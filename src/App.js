import logo from './logo.svg';
import './App.css';




let db = {
  "player": {
    "name": "Player",
    "health": 100,
    "cash": 0,
    "inventory": "Empty",
    "savings": 0
  },
  "station": {
    "name": "Station",
    "square_feet": 100,
    "pumps": 1,
    "fuel_types": ["diesel", "unleaded", "premium"],
    "tanks": 3,
    "tank_max_level": 1000,
    "tank_levels": {
      "diesel": 1000,
      "unleaded": 1000,
      "premium": 100,
    },
    "prices": {
      "diesel": 1.25,
      "unleaded": 1.5,
      "premium": 2.0
    },
    "inventory": {
      "candy": 10,
      "soda": 10,
      "smokes": 10,
      "coffee": 10,
      "water": 10,
      "beer": 2,
    },
    "pump_data": {
      "brand": "Gilbarco",
      "model": "Veeder Root TLS-350",
      "serial_number": "123456789",
      "gpm": 10
    },
  },
};

/* #TODO: Add a locations feature so players can have more than one station */

function round() { };
function buildCustomer() { };
function singleEvent() { };
let station_full = false;

function App() {
  console.log(db);
  db = JSON.parse(localStorage.getItem("db"));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{db.player.name}</p>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header >
    </div >
  );
}



export default App;
