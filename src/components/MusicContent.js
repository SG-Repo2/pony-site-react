import React from 'react';
// Import images directly from src/images
import appleMusicIcon from '../images/appleMusic.png';
import spotifyIcon from '../images/spotify.png';
import ytIcon from '../images/yt.png';
import shopCasseteIcon from '../images/shopCassete.png';


function MusicContent() {
  return (
    <> {/* Use Fragment because this component doesn't need a wrapper div itself */}
      <h1>MUSIC</h1>
      <iframe
        width="600" // Consider making these responsive or smaller defaults
        height="600"
        src="https://www.youtube.com/embed/wbby9coDRCk"
        title="Narwhals | 10 Hours"
        frameBorder="0" // Note: Changed from frameborder
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen // Note: Changed from allowfullscreen
      ></iframe>
      <div className="music-links">
        <a href="https://music.apple.com/" target="_blank" rel="noopener noreferrer">
          {/* Use imported image variables */}
          <img src={appleMusicIcon} alt="Apple Music" className="music-icon" />
        </a>
        <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
          <img src={spotifyIcon} alt="Spotify" className="music-icon" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={ytIcon} alt="YouTube" className="music-icon" />
        </a>
        <a href="https://www.storelink.com/" target="_blank" rel="noopener noreferrer">
          <img src={shopCasseteIcon} alt="Store" className="music-icon" />
        </a>
      </div>
    </>
  );
}

export default MusicContent;
