import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import AboutSplit from '@/components/blocks/about-split';
import AboutValues from '@/components/blocks/about-values';
import StatsCounter from '@/components/blocks/stats-counter';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'About | Harris Landscaping & Gardens',
  description:
    'Harris Landscaping & Gardens has delivered premium outdoor transformations across South-West Sydney for over 15 years with a fully insured, detail-driven team.',
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
      <AboutSplit
        body="Harris Landscaping & Gardens has been delivering premium outdoor transformations across South-West Sydney for over 15 years. Our fully insured, detail-focused team works closely with homeowners and builders to bring every vision to life — on time, within budget, and to the highest standard. We take pride in every project we complete, from small garden refreshes to large-scale residential builds."
        image="/images/about.jpg"
        stats={['15+ Years Experience', '500+ Projects Completed', '100% Fully Insured']}
        heading="Locally Rooted. Professionally Driven. Proudly South-West Sydney."
        imageAlt="Harris Landscaping & Gardens team working on a residential landscaping project in South-West Sydney"
      />
      <AboutValues
        items={[
          { title: '15+ Years of Local Experience', description: "We know South-West Sydney's soil, climate, and council requirements inside out — giving your project the best foundation from day one." },
          { title: 'Fully Insured & Accountable', description: 'Every job is carried out by a fully insured team, so you can have complete peace of mind throughout your outdoor transformation.' },
          { title: 'Clear Timelines, No Surprises', description: 'We provide detailed project timelines upfront and keep you informed every step of the way, ensuring your project is delivered on schedule.' },
        ]}
        heading="Why Homeowners Choose Harris Landscaping"
        subheading="We combine local knowledge, trade expertise, and genuine care for our clients to deliver results that stand the test of time."
      />
      <StatsCounter
        items={[
          { label: 'Years in Business', value: '15', suffix: '+' },
          { label: 'Projects Completed', value: '500', suffix: '+' },
          { label: 'Fully Insured', value: '100', suffix: '%' },
          { label: 'Star Google Rating', value: '5', suffix: '★' },
        ]}
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
