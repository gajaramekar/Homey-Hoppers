// Replace each empty slot with an approved customer quote, name, and move details.
const customerStories: { id: string; quote: string; name: string; detail: string }[] = [
  { id: '01', quote: '', name: '', detail: '' },
  { id: '02', quote: '', name: '', detail: '' },
  { id: '03', quote: '', name: '', detail: '' },
];

export default function SocialProof() {
  return (
    <section className="social-proof" aria-labelledby="social-proof-heading">
      <div className="social-proof-heading">
        <p className="eyebrow">REAL RENTERS. REAL HOPS.</p>
        <h2 id="social-proof-heading">Don’t just take <em>our word for it.</em></h2>
      </div>
      <div className="social-proof-track" tabIndex={0} role="region" aria-label="Customer stories" aria-describedby="social-proof-hint">
        {customerStories.map((story) => (
          <figure className="social-proof-card" key={story.id}>
            <div className="social-proof-card-top" aria-hidden="true">
              <span className="social-proof-quote">“</span>
              <span className="social-proof-number">{story.id}</span>
            </div>
            {story.quote ? <blockquote>{story.quote}</blockquote> : (
              <p className="social-proof-placeholder">A renter’s story,<br /><em>coming soon.</em></p>
            )}
            <figcaption>
              <span className="social-proof-avatar" aria-hidden="true">{story.name ? story.name.charAt(0) : '—'}</span>
              <span><strong>{story.name || 'Your next chapter.'}</strong><span>{story.detail || 'Future customer story'}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="social-proof-hint" id="social-proof-hint">Swipe to explore <span aria-hidden="true">→</span></p>
    </section>
  );
}
