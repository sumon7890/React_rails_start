import React from 'react';
import './';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
    {
        emoji: '😀',
        name: "test grinning face"
    },
    {
        emoji: '🎉',
        name: "party popper"
    },
    {
        emoji: '💃',
        name: "woman dancing"
    }
];

function App() {
    const greeting = "greeting";
    const displayAction = false;
    return (
        <div className="container">
            <h1 id={greeting}>Hello, I am Sumon</h1>
            <h3 id={greeting}>I am Still Learning to Web Developement</h3>
            {displayAction && <p>I am writing JSX</p>}
            <ul>
                {
                    emojis.map(emoji => (
                        <li key={emoji.name}>
                            <button
                                onClick={displayEmojiName}
                            >
                                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App;