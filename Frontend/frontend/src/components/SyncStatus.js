import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SyncStatus = () => {
  const [status, setStatus] = useState('Sync not started');

  const fetchSyncStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/sync/status');
      setStatus(response.data.status);
    } catch (error) {
      console.error('Error fetching sync status:', error);
      setStatus('Error fetching sync status');
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchSyncStatus, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h2>Sync Status</h2>
      <p>{status}</p>
    </div>
  );
};

export default SyncStatus;
