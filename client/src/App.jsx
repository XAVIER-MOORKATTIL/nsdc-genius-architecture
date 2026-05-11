import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ status: "RECOGNIZING...", identity: "SCANNING..." });

  useEffect(() => {
    // Calling the Truth from the Mirror (Backend Port 5000)
    axios.get('https://nsdc-genius-backend.onrender.com/')
      .then(res => setData(res.data))
      .catch(err => setData({ status: "BACKEND_OFFLINE", identity: "ERROR" }));
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', color: '#00ff41', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Courier New, monospace', textAlign: 'center' }}>
      <h1 style={{ borderBottom: '2px solid #00ff41', paddingBottom: '10px' }}>NSDC GENIUS VERIFICATION SYSTEM</h1>
      
      <div style={{ padding: '40px', border: '1px solid #00ff41', borderRadius: '15px', boxShadow: '0 0 20px #00ff41' }}>
        <h2>VERDICT: <span style={{ color: 'white' }}>{data.status}</span></h2>
        <hr style={{ borderColor: '#00ff41' }} />
        <p style={{ fontSize: '1.2rem' }}><strong>IDENTIFIED AS:</strong> {data.identity}</p>
        <p style={{ fontSize: '1.2rem' }}><strong>ACADEMIC PATH:</strong> {data.degree_path}</p>
        <p style={{ fontSize: '1.2rem' }}><strong>LABOUR CLASS:</strong> {data.manual_labour}</p>
      </div>

      <footer style={{ marginTop: '50px', opacity: '0.7' }}>
        <p>SYSTEM_STATUS: 10,000% BILLION EQUALITY ACHIEVED</p>
        <p>© ARCHITECT XAVIER MOORKATTIL</p>
      </footer>
    </div>
  );
}

export default App;