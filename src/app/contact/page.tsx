import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import ContactForm from '@/components/blocks/contact-form';
import ContactMap from '@/components/blocks/contact-map';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Contact | Harris Landscaping & Gardens',
  description:
    'Get your free, obligation-free landscaping quote from Harris Landscaping & Gardens. Serving Campbelltown, Camden, Narellan, Picton and the wider South-West Sydney region.',
};

export default function Page() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/gallery', label: 'Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <ContactForm
        formCta="Send My Quote Request"
        heading="Get Your Free Landscaping Quote"
        subheading="Tell us about your project and we'll get back to you with a detailed, obligation-free quote. Serving Campbelltown, Camden, Narellan, Picton, and the wider South-West Sydney region."
      />
      <ContactMap
        email="info@harrislandscaping.com.au"
        hours="Mon–Fri: 6:30am–4:30pm | Saturday: By appointment only | Sunday: Closed"
        phone="0400 000 000"
        address="Campbelltown, NSW 2560"
        heading="Find Us in South-West Sydney"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26571.0!2d150.8135!3d-34.0651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12c3b1b1b1b1b1%3A0x1!2sCampbelltown+NSW+2560!5e0!3m2!1sen!2sau!4v1000000000000"
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium outdoor transformations across South-West Sydney, backed by 15+ years of experience and a fully insured, detail-driven team."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          { heading: 'Services', links: [
            { href: '/services#paving', label: 'Paving' },
            { href: '/services#turf-installation', label: 'Turf Installation' },
            { href: '/services#retaining-walls', label: 'Retaining Walls' },
            { href: '/services#decking', label: 'Decking' },
            { href: '/services#garden-design', label: 'Garden Design' },
            { href: '/services#full-outdoor-transformations', label: 'Full Outdoor Transformations' },
          ] },
          { heading: 'Service Areas', links: [
            { href: '/service-areas/campbelltown', label: 'Campbelltown' },
            { href: '/service-areas/camden', label: 'Camden' },
            { href: '/service-areas/narellan', label: 'Narellan' },
            { href: '/service-areas/picton', label: 'Picton' },
            { href: '/service-areas/ingleburn', label: 'Ingleburn' },
            { href: '/service-areas/macarthur', label: 'Macarthur Region' },
          ] },
          { heading: 'Company', links: [
            { href: '/about', label: 'About Us' },
            { href: '/gallery', label: 'Project Gallery' },
            { href: '/contact', label: 'Contact Us' },
            { href: '/contact', label: 'Get a Free Quote' },
          ] },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
