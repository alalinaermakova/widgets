import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';
import '../App.css';


const items = [
    {
        title: 'What is React?',
        content: 'React is javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers' 
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components' 
    }
]

const options = [
    {
        label: 'Color Red',
        value: 'Red'
    },
    {
        label: 'Color Green',
        value: 'Green'
    },
    {
        label: 'Color Blue',
        value: 'Blue'
    },
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="App">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}

export default App;