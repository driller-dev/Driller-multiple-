export default function Home() {
  return (
    <main style={{minHeight: '100vh', background: '#f0f9ff', fontFamily: 'sans-serif', padding: 20}}>
      <div style={{maxWidth: 500, margin: '0 auto', background: 'white', borderRadius: 20, padding: 30}}>
        <h1 style={{fontSize: 40, textAlign: 'center'}}>🚀 TOP GO</h1>
        <div style={{background: '#1e40af', color: 'white', padding: 20, borderRadius: 15, marginTop: 20, textAlign: 'center'}}>
          <h2>🚔 POLICE APP</h2>
        </div>
        <button style={{width: '100%', padding: 18, background: '#dc2626', color: 'white', border: 'none', borderRadius: 12, marginTop: 20, fontSize: 18, fontWeight: 'bold'}}>🚨 EMERGENCY CALL</button>
        <button style={{width: '100%', padding: 18, background: '#16a34a', color: 'white', border: 'none', borderRadius: 12, marginTop: 10}}>📍 Report Crime</button>
        <button style={{width: '100%', padding: 18, background: '#2563eb', color: 'white', border: 'none', borderRadius: 12, marginTop: 10}}>📝 Report Incident</button>
        <p style={{textAlign: 'center', marginTop: 20, color: '#888'}}>Powered by TOP GO</p>
      </div>
    </main>
  );
                  }
