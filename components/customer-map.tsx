import states from '@/components/data/us-states.json';

// Add customer locations as SVG coordinates in the 900 × 590 viewBox.
// Alaska and Hawaii are shown as insets, not at the mainland scale.
const customerLocations: { name: string; x: number; y: number }[] = [];

export default function CustomerMap() {
  return (
    <section className="customer-map" aria-labelledby="customer-map-heading">
      <p className="eyebrow">FROM NEAR AND FAR</p>
      <h2 id="customer-map-heading">Many starting points. <em>One New York.</em></h2>
      <p className="customer-map-description">Follow along as we add where our renters’ journeys begin.</p>
      <svg viewBox="0 0 900 590" role="img" aria-labelledby="customer-map-title customer-map-desc">
        <title id="customer-map-title">Where our customers call home</title>
        <desc id="customer-map-desc">A map of the United States with Alaska and Hawaii shown as insets. {customerLocations.length ? `Customer locations: ${customerLocations.map(location => location.name).join(', ')}.` : 'Customer locations will be added soon.'}</desc>
        <g className="customer-map-states" strokeLinejoin="round">
          {states.map(state => <path key={state.name} d={state.d} />)}
        </g>
        <g className="customer-map-dots">
          {customerLocations.map(location => (
            <circle key={location.name} cx={location.x} cy={location.y} r="6">
              <title>{location.name}</title>
            </circle>
          ))}
        </g>
        <g className="customer-map-labels" textAnchor="middle" aria-hidden="true">
          <text x="137" y="582">ALASKA</text>
          <text x="312" y="582">HAWAII</text>
        </g>
      </svg>
      <p className="customer-map-caption">{customerLocations.length ? 'Every dot, a new chapter.' : 'Our customer map is coming to life soon.'}</p>
    </section>
  );
}
