'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Arrow } from './icons';
import Image from 'next/image';
export default function Header() {
  const pathname = usePathname();
  return <header className="site-header"><Link href="/" className="logo" aria-label="The Homey Hoppers home"><Image src="/images/homey%20hopper%20logo.png" alt="" width={56} height={56} className="brand-image" priority/><span>the homey<span className="logo-second">hoppers</span></span></Link><nav aria-label="Main navigation">{[['/', 'Home'], ['/book', 'Book a Tour'], ['/pricing', 'Pricing'], ['/about', 'About Us']].map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}</nav><Link href="/book" className="button header-cta">Let’s hop to it <Arrow diagonal/></Link></header>;
}
