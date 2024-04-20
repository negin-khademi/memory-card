import './App.css';

import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([
    { title: "negin's brthday bash", id: 1 },
    { title: "nasim's brthday bash", id: 2 },
    { title: "narsis's brthday bash", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents(
      events.filter((event) => {
        return id !== event.id;
      })
    );

    console.log(id);
  };
  return (
    <div className="App">
      {events.map((event) => (
        <div key={event.id}>
          <h1>
            {event.id}-{event.title}
          </h1>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
