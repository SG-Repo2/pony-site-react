import React from 'react';

// This component receives the changeChannel function as a prop
function Navigation({ changeChannel }) {
  return (
    <nav>
      <div className="buttons">
        <div className="top-buttons">
          <div className="button-container">
            {/* Call changeChannel with the correct channel name on click */}
            <button className="music-button" onClick={() => changeChannel('music')}></button>
            <span></span> {/* Keep spans if they are used for styling */}
            <div className="button-label">MUSIC</div>
          </div>
          <div className="button-container">
            <button className="merch-button" onClick={() => changeChannel('merch')}></button>
            <span></span>
            <div className="button-label">MERCH</div>
          </div>
        </div>
        <div className="bottom-buttons">
          <div className="button-container">
            <button className="tour-button" onClick={() => changeChannel('tour')}></button>
            <span></span>
            <div className="button-label">TOUR</div>
          </div>
          <div className="button-container">
            <button className="contact-button" onClick={() => changeChannel('contact')}></button>
            <span></span>
            <div className="button-label">CONTACT</div>
          </div>
          <div className="button-container">
            <button className="power-button" onClick={() => changeChannel('tv-static')}></button>
            <span></span>
            <div className="button-label">POWER</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
