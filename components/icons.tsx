import type { CSSProperties } from 'react';

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function House({ className = '' }: { className?: string }) {
  return <svg className={className} width="28" height="30" viewBox="0 0 28 30" fill="none" aria-hidden="true"><path d="m3 13 11-9 11 9v13H3V13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M11 26v-9h6v9M20 4v5" stroke="currentColor" strokeWidth="2"/><path d="m6 3 2-2M1 7l3 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
export function Icon({ kind }: { kind: 'pin' | 'video' | 'notes' | 'check' }) {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{kind === 'pin' ? <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></> : kind === 'video' ? <><rect x="2" y="5" width="13" height="14" rx="3"/><path d="m15 9 7-4v14l-7-4"/></> : kind === 'notes' ? <><rect x="5" y="3" width="14" height="19" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></> : <path d="m5 12 4 4L19 6"/>}</svg>;
}

export function ApartmentArt() {
  return <div className="apartment-art" role="img" aria-label="Illustration of a sunny New York brownstone apartment with a fire escape">
    <div className="art-sun"/><div className="distant-building"/>
    <div className="brownstone"><div className="cornice"/><div className="building-windows">{Array.from({ length: 9 }, (_, i) => <div className={`window window-${i}`} key={i}><span/><span/>{i === 4 && <div className="plant">✦</div>}</div>)}</div><div className="fire-escape"><div/><div/><div/></div><div className="front-door"/><div className="stoop"/></div>
    <div className="tree"><span/><span/><span/><i/></div><div className="street-line"/>
    <div className="tour-label"><span className="live-dot"/> A little closer to home.</div>
    <div className="call-card"><div className="call-avatar"><House/></div><div><strong>Your eyes in NYC</strong><span>On the ground. On your side.</span></div><span className="call-icon"><Icon kind="video"/></span></div>
    <span className="art-caption" style={{ '--rotation': '-7deg' } as CSSProperties}>Big move. Local friend.</span>
  </div>;
}
