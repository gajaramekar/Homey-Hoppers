import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  return (
    <main id="main" className="interior-page legal-page">
      <p className="eyebrow">HOMEY HOPPERS</p>
      <h1>Privacy Policy</h1>
      <p className="legal-date">Last updated: September 15, 2026</p>
      <p>This policy explains how Homey Hoppers handles information in connection with our website, inquiries, and NYC apartment touring and documentation services.</p>
      <section><h2>Information we collect</h2><p>We receive information you provide through our inquiry form, email, or tour communications. This may include your name, email address, phone number, apartment listing and address, showing details, tour preferences, and questions you want checked. We also receive documentation you send to support a refund or restored tour credit.</p><p>Providing the service produces photos, videos, notes, and communications about the showing. Please do not send Social Security numbers, financial account details, identification documents, or other sensitive information through our inquiry form or email.</p></section>
      <section><h2>How we use information</h2><p>We use this information to respond to inquiries, coordinate and confirm tours, communicate with you and the showing contact, deliver documentation, manage package credits, review cancellation requests, and maintain service records.</p></section>
      <section><h2>Who receives information</h2><p>Information needed to arrange or carry out your tour may be shared with your assigned Hopper and the broker, agent, or other showing contact. Providers that support our forms, email, website hosting, and tour communications also process information as part of delivering those services. Information may also be disclosed when required by law or necessary to address fraud, safety concerns, or legal claims.</p></section>
      <section><h2>Google Forms and website hosting</h2><p>Our inquiry form is hosted by Google and embedded on the booking page. Loading or using it connects your browser to Google, which may process technical information and use cookies under its own <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Your form responses are provided to Homey Hoppers.</p><p>Our website is hosted on Vercel. Hosting providers may process technical information such as IP addresses, browser details, requested pages, and access times to deliver and secure the site. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel’s Privacy Policy</a>. Browser settings can limit cookies, although this may affect embedded services.</p></section>
      <section><h2>Retention and security</h2><p>Information may be retained to complete tours, manage unused package credits, address support or refund requests, and meet recordkeeping or legal obligations. Retention needs vary by the type of information and the status of your service. No internet transmission or storage system is completely secure.</p></section>
      <section><h2>Your choices</h2><p>You may choose not to provide information, although we may then be unable to arrange a tour. To request access to, correction of, or deletion of information you provided, email <a href="mailto:homeyhoppers23@gmail.com">homeyhoppers23@gmail.com</a>. We may need to verify your identity. Some records may need to be retained for outstanding services, disputes, or legal obligations. Additional privacy rights may apply depending on where you live.</p></section>
      <section><h2>Updates and contact</h2><p>We may update this policy as our services or practices change and will revise the date above. For privacy questions, contact <a href="mailto:homeyhoppers23@gmail.com">homeyhoppers23@gmail.com</a>.</p></section>
    </main>
  );
}
