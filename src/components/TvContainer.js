import React from 'react';
import MusicContent from './MusicContent';
import MerchContent from './MerchContent';
import TourContent from './TourContent';
import ContactContent from './ContactContent';
import TvStaticContent from './TvStaticContent';
import logo from '../logo.svg'; // Import the logo

// This component receives the current channel and background color
function TvContainer({ currentChannel, backgroundColor }) {

  // Helper function to determine the display style based on channel
  const getDisplayStyle = (channel) => {
    if (currentChannel !== channel) {
      return { display: 'none' };
    }
    // Apply specific display types needed from original script.js/css
    if (channel === 'tour' || channel === 'music') {
      return { display: 'flex' };
    } else if (channel === 'merch') {
      // We add the grid-view class conditionally below
      return { display: 'grid' };
    }
    return { display: 'block' }; // Default
  };

  // Determine className for merch content
  const merchClassName = `content ${currentChannel === 'merch' ? 'grid-view' : ''}`;

  return (
    <>
      <div className="tv-container" style={{ backgroundColor: backgroundColor }}>
        {/* Conditionally render Static */}
        {currentChannel === 'tv-static' && <TvStaticContent />}

        {/* Render all content divs, but control visibility with style */}
        <div id="music-content" className="content" style={getDisplayStyle('music')} data-color="#FBF0B2">
          <MusicContent />
        </div>

        {/* Use dynamic className for merch grid */}
        <div id="merch-content" className={merchClassName} style={getDisplayStyle('merch')} data-color="#6488e7">
          <MerchContent />
        </div>

        <div id="tour-content" className="content" style={getDisplayStyle('tour')} data-color="#7a58e0">
          <TourContent />
        </div>

        <div id="contact-content" className="content" style={getDisplayStyle('contact')} data-color="#FBF0B2">
          <ContactContent />
        </div>
        
        {/* Add the logo below the TV container */}
        <img 
          src={logo} 
          alt="Pony Logo" 
          style={{ display: 'block', margin: '20px auto', width: '100px' }} 
        />
      </div>
    </>
  );
}

export default TvContainer;