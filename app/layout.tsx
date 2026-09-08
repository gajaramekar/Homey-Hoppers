import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Image from 'next/image';
import './globals.css';

export const metadata: Metadata = { title: { default: 'The Homey Hoppers | Your eyes inside your next NYC apartment', template: '%s | The Homey Hoppers' }, description: 'Apartment hunting from afar? A local Homey Hopper attends your NYC showing and shares a live video call, photos, videos, and notes.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><div className="site-shell"><Header/>{children}<footer><div className="footer-top"><Link href="/" className="footer-brand"><Image src="/images/homey%20hopper%20logo.png" alt="" width={44} height={44} className="brand-image"/> the homey hoppers</Link><p>A local perspective. A little peace of mind.</p><span>Made for your NYC move. ↗</span></div><div className="footer-bottom"><p>The Homey Hoppers is a touring and documentation service, not a real estate brokerage, legal advisor, or professional property inspection service.</p><span>© {new Date().getFullYear()} The Homey Hoppers</span></div></footer></div></body></html>;
}
