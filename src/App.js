import Header from './components/Header'
import Switch from './components/Switch'
import AppCard from './components/AppCard'
import './App.css';
import {Data} from './Data';
import { useState } from 'react';


function App() {
  const [DataItem , setDataItem] = useState(Data);
  return (
    <div className="App">
    <Header />
    <Switch DataItem={DataItem}/>
    <AppCard DataItem={DataItem}/>
    </div>
  );
}

export default App;
