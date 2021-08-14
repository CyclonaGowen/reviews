import React from 'react';
import Review from './Review';
//This is how you add a react-icon
function App() {
  return (
  <main>
    <section className="container">
      <div className="title">
        <h2>The dogs of Cortland Station</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  </main>
  )
}

export default App;
