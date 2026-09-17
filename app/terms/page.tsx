import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Terms & Conditions' };

export default function Terms() {
  return (
    <main id="main" className="interior-page legal-page">
      <p className="eyebrow">HOMEY HOPPERS</p>
      <h1>Terms &amp; Conditions</h1>
      <p className="legal-date">Last updated: September 17, 2026</p>
      <p>These terms describe the conditions for booking and using Homey Hoppers LLC’s apartment touring and documentation services. Please review them before requesting a tour and contact us with any questions.</p>
      <section><h2>Our service</h2><p>A local Hopper attends an NYC apartment showing on your behalf and provides a live video call and/or photos, videos, and notes, as arranged for your tour. Homey Hoppers LLC is a touring and documentation service, not a real estate brokerage, legal advisor, or professional property inspection service.</p><p>We document what we can observe during the showing. We do not verify ownership, listing accuracy, legal compliance, structural integrity, or hidden defects, and we do not negotiate leases or guarantee an apartment’s condition or availability. Rental decisions and lease agreements remain between you and the relevant landlord or broker.</p></section>
      <section><h2>Requests and confirmation</h2><p>Submitting an inquiry does not guarantee a booking. A tour is only confirmed once Homey Hoppers LLC confirms availability. Provide accurate listing, showing, access, and contact details, and let us know promptly about changes. Any payment arrangements will be communicated during booking.</p><p>Access and recording depend on the showing contact’s permission and property rules. Video calls also depend on connectivity. Tell us in advance about any specific details you want documented; we cannot guarantee access to every area or an answer to every question.</p></section>
      <section><h2>Pricing and packages</h2><ul><li>Individual tours booked at least 24 hours in advance: $39 per tour.</li><li>Individual tours booked less than 24 hours in advance: $49 per tour.</li><li>Three-tour package: $99 paid up front. Schedule tours as you find apartments; you do not need to schedule all three at once. Short-notice fees are waived for package tours.</li></ul><p>All tours, including package tours, are subject to availability. Prices for future bookings may change; the price confirmed for your booking or purchased package applies. See our <Link href="/pricing">Pricing page</Link> or email us about a package.</p></section>
      <section><h2>Cancellations, refunds, and package credits</h2><p>For individual tours, refunds are only issued if the broker cancels the tour or the apartment is rented out before the tour. Proof of the cancellation or rental is required.</p><p>Package tours are non-refundable. In those same circumstances, with proof, the affected tour credit is restored instead, so you can still book all three tours in your package.</p><p>Send requests and supporting proof to <a href="mailto:homeyhoppers23@gmail.com">homeyhoppers23@gmail.com</a>. These policies do not limit any refund or other rights that cannot be excluded under applicable law.</p></section>
      <section><h2>Tour materials and responsible use</h2><p>Photos, videos, and notes are provided to help with your apartment search and reflect the showing at that time. They are not a substitute for professional advice or an inspection. Respect the privacy of occupants and other people when using or sharing tour materials, and do not use our service to obtain unauthorized access or recordings.</p></section>
      <section><h2>Privacy</h2><p>Our <Link href="/privacy">Privacy Policy</Link> explains how information is handled when you contact us, submit an inquiry, or use our services.</p></section>
      <section><h2>Updates and questions</h2><p>We may update these terms for future bookings and will revise the date above. Changes do not retroactively alter confirmed booking or purchased package terms. Contact <a href="mailto:homeyhoppers23@gmail.com">homeyhoppers23@gmail.com</a> with questions about these terms or your tour.</p></section>
    </main>
  );
}
