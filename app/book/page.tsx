import type { Metadata } from 'next';
import { Arrow, Icon } from '@/components/icons';
import { BOOKING_FORM_URL, BOOKING_FORM_EMBED_URL } from '@/lib/site';

export const metadata: Metadata = { title: 'Book a Tour' };

export default function Book() {
  return (
    <main id="main" className="interior-page booking-page">
      <div className="booking-intro">
        <p className="eyebrow"><span className="live-dot"/> LET’S GET YOU A LOOK INSIDE</p>
        <h1>Your listing.<br/>Our next <em>stop.</em></h1>
        <p className="page-intro">Fill out the information below to tell us about the apartment you’d like to see. We’ll review your inquiry and get in touch to confirm availability and next steps.</p>
      </div>
      <div className="booking-form-container">
        <p className="availability-note">
          <Icon kind="notes"/>
          <span>Submitting an inquiry does not guarantee a booking. Your tour is only confirmed once we confirm availability.</span>
        </p>
        <div className="booking-form-frame">
          <iframe
            className="inquiry-form"
            src={BOOKING_FORM_EMBED_URL}
            title="The Homey Hoppers tour inquiry form"
            width="640"
            height="1100"
          >Loading inquiry form…</iframe>
        </div>
        <p className="form-fallback">
          Having trouble viewing the form?{' '}
          <a href={BOOKING_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-link">
            Open in a new tab <Arrow diagonal/>
          </a>
        </p>
      </div>
    </main>
  );
}
