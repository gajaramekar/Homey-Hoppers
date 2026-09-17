import Link from 'next/link';
import SocialProof from '@/components/social-proof';
import CustomerMap from '@/components/customer-map';
import { ApartmentArt, Arrow, Icon } from '@/components/icons';

export default function Home() {
  return <main id="main"><section className="hero"><div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> YOUR LOCAL CONNECTION IN NYC</div><h1>Your next home.<br/>Our next <em>hop.</em></h1><p className="hero-description">Can’t make the apartment showing?<br className="desktop-break"/> We’ll be your eyes inside.</p><p className="hero-detail">Apartment tours start at $39.</p><div className="hero-actions"><Link className="button" href="/book">Book a Tour <Arrow diagonal/></Link><Link className="text-link" href="#how-it-works">Learn More <Arrow/></Link></div></div><ApartmentArt/></section>
  <section className="how-section" id="how-it-works"><div className="section-heading"><div><p className="eyebrow">LESS GUESSWORK. MORE PEACE OF MIND.</p><h2>Here&apos;s how we hop in.</h2></div></div><div className="steps">{[{ n:'01', kind:'pin' as const, title:'Send us the details', text:'Share the apartment listing, showing details, and anything you’d like us to take a closer look at.' },{ n:'02', kind:'video' as const, title:'We hop over', text:'Once availability is confirmed, a local Hopper attends the showing and virtually brings you along.' },{ n:'03', kind:'notes' as const, title:'Get the full picture', text:'Receive a live video call and/or photos, videos, and notes to help you decide on your next step.' }].map(step => <article className="step" key={step.n}><div className="step-top"><span className="icon-box"><Icon kind={step.kind}/></span><span className="step-number">{step.n}</span></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><p className="hop-includes"><strong>Every hop can include:</strong> live video call • photos &amp; videos • your requested checks • post-tour notes</p></section>
  <SocialProof />
  <CustomerMap />
  <section className="closing-cta"><div><p className="eyebrow">YOUR NEXT CHAPTER STARTS WITH A LOOK</p><h2>Found a place? Let’s hop over.</h2></div><Link href="/book" className="button">Book a Tour <Arrow diagonal/></Link></section></main>;
}
