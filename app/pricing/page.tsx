import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow } from '@/components/icons';

export const metadata: Metadata = { title: 'Pricing' };

export default function Pricing() {
  return (
    <main id="main" className="interior-page">
      <div className="booking-intro">
        <p className="eyebrow">A LOCAL LOOK, AT A SIMPLE PRICE</p>
        <h1>A little help.<br/><em>Priced simply.</em></h1>
        <p className="page-intro">One apartment or a few contenders? Pick the option that fits your search.</p>
      </div>
      <div className="pricing-grid">
        <section className="pricing-card">
          <h2>Plan ahead</h2>
          <p className="pricing-amount">$39 <span>/ tour</span></p>
          <p>For tours booked at least 24 hours in advance.</p>
          <Link href="/book" className="button">Book a Tour <Arrow diagonal/></Link>
        </section>
        <section className="pricing-card">
          <h2>Short notice</h2>
          <p className="pricing-amount">$49 <span>/ tour</span></p>
          <p>For tours booked less than 24 hours in advance.</p>
          <Link href="/book" className="button">Book a Tour <Arrow diagonal/></Link>
        </section>
        <section className="pricing-card pricing-package">
          <h2>Three-tour package</h2>
          <p className="pricing-amount">$99 <span>/ 3 tours</span></p>
          <p>Save 15% when you pay for 3 tours up front. Use them as you find apartments — no need to schedule all three at once. Plus, express fees are waived!</p>
          <p>Interested? Email us at <a className="pricing-email" href="mailto:homeyhoppers23@gmail.com">homeyhoppers23@gmail.com</a>.</p>
          <a href="mailto:homeyhoppers23@gmail.com?subject=Three-tour%20package%20inquiry" className="button">Get the package <Arrow diagonal/></a>
        </section>
      </div>
      <p className="pricing-disclaimer">All tours are subject to availability. Submitting an inquiry does not guarantee a booking; your tour is only confirmed once we confirm availability.</p>
      <p className="pricing-disclaimer"><strong>Refund policy:</strong> For individual tours, refunds are only issued if the broker cancels the tour or the apartment is rented out before the tour. Proof of the cancellation or rental is required. Package tours are non-refundable. In these cases, with proof, the tour credit is restored instead so you can still book all three tours in your package.</p>
    </main>
  );
}
