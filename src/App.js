import React, { useState } from 'react';
// No need to import App.css if we deleted its content
// index.css is imported automatically via src/index.js
import TvContainer from './components/TvContainer';
import Navigation from './components/Navigation';
import Y2KEffects from './components/Y2KEffects';

// Define colors associated with each channel
const channelColors = {
  'music': '#FBF0B2',
  'merch': '#6488e7',
  'tour': '#7a58e0',
  'contact': '#FBF0B2',
  'tv-static': '#FFB0D0' // Original default color
};

function App() {
  // State to track the currently selected channel
  const [currentChannel, setCurrentChannel] = useState('tv-static'); // Start with static
  // Add this state
  const [isChangingChannel, setIsChangingChannel] = useState(false);

  // Update the changeChannel function
  const changeChannel = (channel) => {
    console.log("Changing to channel:", channel);
    setIsChangingChannel(true);

    // Add a delay to simulate TV channel changing
    setTimeout(() => {
      setCurrentChannel(channel);
      setIsChangingChannel(false);
    }, 500);
  };

  // Get the background color for the current channel
  const tvBackgroundColor = channelColors[currentChannel] || channelColors['tv-static'];

  return (
    // Wrap the entire app content with the centering wrapper
    <div className="app-wrapper">
      <div className="tv-outer-case">
        <div className="tv-and-effects">
          <TvContainer
            currentChannel={currentChannel}
            backgroundColor={tvBackgroundColor}
          />
          {/* Add this inside your TV container */}
          <Y2KEffects />
        </div>
        <Navigation changeChannel={changeChannel} />
      </div>

      {/* Optional: Add back the cursors-4u link if desired */}
      <a
        href="https://www.cursors-4u.com/cursor/2011/04/19/robot-unicorn.html"
        target="_blank"
        rel="noopener noreferrer"
        title="Robot Unicorn"
        style={{ position: 'absolute', top: '0px', right: '0px', zIndex: 10 }} // Basic positioning
      >
        <img src="https://cur.cursors-4u.net/cursor.png" border="0" alt="Robot Unicorn" />
      </a>
      {/* Add right before the closing tv-outer-case div */}
      <div className={`channel-transition ${isChangingChannel ? 'active' : ''}`}></div>
    </div>
  );
}

export default App;
