import React, { useState } from 'react';

const Tickets = () => {
  const [match, setMatch] = useState('');
  const [count, setCount] = useState('');

  const handleBuy = () => {
    if (!match || !count) return alert('Please fill both fields');
    window.open('https://tickets.t20worldcup.com...', '_blank');
  };

  return (
    <section id="tickets" className="section">
      <h2>Buy Tickets</h2>
      <p>Secure your spot starting at just $6!</p>
      <div className="ticket-form">
        <input type="text" placeholder="Match #" value={match} onChange={e => setMatch(e.target.value)} />
        <input type="number" placeholder="Quantity" value={count} onChange={e => setCount(e.target.value)} />
        <button className="btn btn-primary" onClick={handleBuy}>Buy Now</button>
      </div>
    </section>
  );
};

export default Tickets;
