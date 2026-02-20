'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

const DISCORD_USER_ID = '1069279857072160921';

export default function Hub() {
  const [discordStatus, setDiscordStatus] = useState('offline');
  const [discordActivity, setDiscordActivity] = useState(null);

  useEffect(() => {
    document.title = 'KaloudasDev LinkHub';
    fetchDiscordStatus();
    
    const interval = setInterval(fetchDiscordStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchDiscordStatus = async () => {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);
      const data = await res.json();
      
      if (data.success) {
        const userData = data.data;
        setDiscordStatus(userData.discord_status || 'offline');
        
        const spotifyActivity = userData.activities?.find((a) => a.type === 2);
        
        if (spotifyActivity) {
          let spotifyData = { ...spotifyActivity };
          if (spotifyData.assets?.large_image?.startsWith('spotify:')) {
            const spotifyId = spotifyData.assets.large_image.replace('spotify:', '');
            spotifyData.assets.large_image = `https://i.scdn.co/image/${spotifyId}`;
          }
          setDiscordActivity(spotifyData);
        } else if (userData.activities?.length > 0) {
          const firstActivity = userData.activities.find((a) => a.type !== 4);
          setDiscordActivity(firstActivity || null);
        } else {
          setDiscordActivity(null);
        }
      }
    } catch (error) {
      console.error('Failed to fetch Discord status:', error);
    }
  };

  const getStatusText = (status) => {
    const map = {
      online: 'Online',
      idle: 'Idle',
      dnd: 'Do Not Disturb',
      offline: 'Offline'
    };
    return map[status] || 'Offline';
  };

  const renderActivity = () => {
    if (!discordActivity) {
      return <div className="hub-no-activity">No activity to show</div>;
    }

    if (discordActivity.name === 'Spotify' && discordActivity.assets) {
      return (
        <div className="hub-discord-activity">
          <img 
            src={discordActivity.assets.large_image}
            alt="Spotify" 
            className="hub-activity-image"
            onError={(e) => (e.currentTarget.src = 'https://cdn.discordapp.com/embed/avatars/0.png')}
          />
          <div className="hub-activity-details">
            <div className="hub-activity-name">LISTENING TO SPOTIFY</div>
            <div className="hub-activity-state">{discordActivity.details || ''}</div>
            <div className="hub-activity-details-small">{discordActivity.state || ''}</div>
          </div>
        </div>
      );
    }

    if (discordActivity.assets?.large_image) {
      return (
        <div className="hub-discord-activity">
          <img 
            src={`https://cdn.discordapp.com/app-assets/${discordActivity.application_id}/${discordActivity.assets.large_image}.png`}
            alt={discordActivity.name}
            className="hub-activity-image"
            onError={(e) => (e.currentTarget.src = 'https://cdn.discordapp.com/embed/avatars/0.png')}
          />
          <div className="hub-activity-details">
            <div className="hub-activity-name">PLAYING {discordActivity.name.toUpperCase()}</div>
            {discordActivity.details && <div className="hub-activity-state">{discordActivity.details}</div>}
            {discordActivity.state && <div className="hub-activity-details-small">{discordActivity.state}</div>}
          </div>
        </div>
      );
    }

    return (
      <div className="hub-discord-activity">
        <div className="hub-activity-details" style={{ marginLeft: 0 }}>
          <div className="hub-activity-name">
            {discordActivity.type === 2 ? 'LISTENING TO' : 'PLAYING'} {discordActivity.name.toUpperCase()}
          </div>
          {discordActivity.details && <div className="hub-activity-state">{discordActivity.details}</div>}
          {discordActivity.state && <div className="hub-activity-details-small">{discordActivity.state}</div>}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="hub-background">
        <div className="hub-gradient-orb hub-orb-1"></div>
        <div className="hub-gradient-orb hub-orb-2"></div>
        <div className="hub-gradient-orb hub-orb-3"></div>
      </div>

      <div className="container">
        <Navbar />

        <div className="hub-wrapper">
          <div className="hub-container">
            <div className="hub-card">
              <div className="hub-profile-section">
                <div className="hub-logo-container">
                  <img 
                    src="https://i.imgur.com/I3ZqQof.png" 
                    alt="KaloudasDev" 
                    className="hub-logo" 
                  />
                </div>
                
                <h1 className="hub-name">KaloudasDev</h1>
                
                <div className="hub-discord-status">
                  <div className="hub-status-indicator">
                    <span className={`hub-status-dot ${discordStatus}`}></span>
                    <span className="hub-status-text">{getStatusText(discordStatus)}</span>
                    <span className="hub-status-badge">
                      <i className="fab fa-discord"></i>
                    </span>
                  </div>
                  <div className="hub-activity-wrapper">
                    {renderActivity()}
                  </div>
                </div>
              </div>

              <div className="hub-links-container">
                <a 
                  href="https://ko-fi.com/kaloudasdev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hub-link-button kofi"
                >
                  <div className="hub-button-content">
                    <i className="fas fa-mug-hot"></i>
                    <span>Support My Work</span>
                    <i className="fas fa-arrow-up-right-from-square hub-link-arrow"></i>
                  </div>
                  <div className="hub-button-glow"></div>
                </a>

                <a 
                  href="https://discord.com/users/1069279857072160921" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hub-link-button discord"
                >
                  <div className="hub-button-content">
                    <i className="fab fa-discord"></i>
                    <span>Connect On Discord</span>
                    <i className="fas fa-arrow-up-right-from-square hub-link-arrow"></i>
                  </div>
                  <div className="hub-button-glow"></div>
                </a>

                <a 
                  href="https://github.com/KaloudasDev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hub-link-button github"
                >
                  <div className="hub-button-content">
                    <i className="fab fa-github"></i>
                    <span>View GitHub Projects</span>
                    <i className="fas fa-arrow-up-right-from-square hub-link-arrow"></i>
                  </div>
                  <div className="hub-button-glow"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}