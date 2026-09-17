import Link from 'next/link';
import { Arrow, Icon } from '@/components/icons';

// Saved homepage section. To restore, replace <SocialProof /> with <TrustSection />
// in app/page.tsx. Its .trust-section and .trust-items styles remain in globals.css.
export default function TrustSection() {
  return (
    <section className="trust-section"><div><p className="eyebrow">A BIG MOVE DESERVES A LITTLE HELP</p><h2>Someone there.<br/><em>Even when you can’t be.</em></h2><Link href="/about" className="text-link">Meet Homey Hoppers <Arrow/></Link></div><div className="trust-items"><article><Icon kind="check"/><div><h3>Your schedule, a little lighter</h3><p>Get a look inside whether you are out of state, overseas, or just overbooked.</p></div></article><article><Icon kind="check"/><div><h3>Real details, clearly documented</h3><p>Tell us what matters to you. We’ll capture what we can see and share it with you.</p></div></article><article><Icon kind="check"/><div><h3>A friendly local connection</h3><p>Built for remote renters by people who know how overwhelming the NYC search can feel.</p></div></article></div></section>
  );
}
