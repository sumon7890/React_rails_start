import React from 'react';
import { Button } from 'reactstrap';
import Menu from '../comoponent/menu'
import CardTo from './card'


function App() {
    const greeting = "greeting";
    return (
        <div className="container">
            <Menu />
            <h1 id={greeting}>Hello, I am Sumon</h1>
            <h3 id={greeting}>I am Still Learning to Web Developement</h3>
            <ul>
                {
                    <Button className="but">
                        Open
                    </Button>
                }
            </ul>
            <CardTo />
        </div>

    )
}

export default App;