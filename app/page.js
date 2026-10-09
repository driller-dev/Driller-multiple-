export default function Page() {
  return (
    <main style={{padding:'20px', maxWidth:'900px', margin:'0 auto', background:'#0a0a0a', color:'white', minHeight:'100vh'}}>
      <div style={{textAlign:'center', padding:'60px 20px'}}>
        <h1 style={{fontSize:'48px', fontWeight:'bold', color:'#22c55e'}}>Multiple Driller</h1>
        <p style={{fontSize:'20px', color:'#aaa', marginTop:'10px'}}>Professional Water Drilling & Borehole Services</p>
        <div style={{marginTop:'40px', display:'grid', gap:'20px'}}>
          <div style={{background:'#171717', padding:'24px', borderRadius:'16px', border:'1px solid #333'}}>
            <h3 style={{fontSize:'20px'}}>💧 Borehole Drilling</h3>
            <p style={{color:'#888'}}>Deep wells for homes, farms, industries</p>
          </div>
          <div style={{background:'#171717', padding:'24px', borderRadius:'16px', border:'1px solid #333'}}>
            <h3 style={{fontSize:'20px'}}>🔧 Pump Installation</h3>
            <p style={{color:'#888'}}>Submersible pumps and water treatment</p>
          </div>
          <div style={{background:'#171717', padding:'24px', borderRadius:'16px', border:'1px solid #333'}}>
            <h3 style={{fontSize:'20px'}}>🛠️ Maintenance</h3>
            <p style={{color:'#888'}}>Fast repair across Nigeria</p>
          </div>
        </div>
        <div style={{marginTop:'50px', background:'#22c55e', color:'black', padding:'24px', borderRadius:'16px'}}>
          <h2>Contact Us - Ibadan</h2>
          <p>Call/WhatsApp: <a href="https://wa.me/2349020502875" style={{color:'white', fontWeight:'bold', textDecoration:'underline'}}>09020502875 - Tap to Chat on WhatsApp</a></p>
        </div>
      </div>
    </main>
  );
}
