export default function Home() {
  return (
    <main style={{minHeight: '100vh', background: '#ffffff', fontFamily: 'sans-serif', padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{maxWidth: 600, width: '100%', textAlign: 'center'}}>
        
        <h1 style={{fontSize: 70, fontWeight: 900, margin: 0, letterSpacing: -2}}>TOP GO</h1>
        <p style={{fontSize: 20, color: '#666', marginTop: 10}}>Create Any App You Want</p>
        
        <div style={{marginTop: 50, background: '#f8f9fa', padding: 30, borderRadius: 20}}>
          <h2 style={{margin: 0}}>Welcome to TOP GO 🚀</h2>
          <p style={{color: '#555', marginTop: 15, lineHeight: 1.6}}>
            Your platform to create popular apps easily.
            Build any type of app - business, social, tools, anything!
          </p>
          
          <button style={{marginTop: 25, padding: '16px 40px', background: 'black', color: 'white', border: 'none', borderRadius: 50, fontSize: 18, fontWeight: 'bold'}}>
            Start Creating →
          </button>
        </div>

        <p style={{marginTop: 40, color: '#999', fontSize: 14}}>TOP GO - Simple. Fast. Any App.</p>
      </div>
    </main>
  );
                  }
