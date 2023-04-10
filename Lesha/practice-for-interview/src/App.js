import './App.css';
import { Context } from './components/context/Context.tsx'
import { ComponentForContext} from './components/context/ComponentForContext'
import {ThemeContext} from './components/context/ThemeContext'
import { useState } from 'react';
import { Counter } from './components/UseReduser/UseReduce';




function App() {
    const [them, setThem] = useState('light')
    const toggleTheme = () =>{
        setThem((currentThem)=> (currentThem === 'light' ? 'dartk' : 'light' ))
    }
  return (
    <div className="App">
        <Context />
        <ThemeContext.Provider value={{them, toggle: toggleTheme}}>
            <ComponentForContext />
        </ThemeContext.Provider>
        <Counter />
    </div>
  );
}

export default App;
