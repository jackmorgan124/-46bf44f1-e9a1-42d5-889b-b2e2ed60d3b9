import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import ServicesAlternating from '@/components/blocks/services-alternating';
import TrustBadges from '@/components/blocks/trust-badges';
import CtaBanner from '@/components/blocks/cta-banner';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Services | Harris Landscaping & Gardens',
  description:
    'Explore the full range of landscaping services from Harris Landscaping & Gardens — paving, turf, retaining walls, decking, garden design and full outdoor transformations across South-West Sydney.',
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
      <ServicesAlternating
        items={[
          { image: '/images/service-paving.jpg', title: 'Paving', imageAlt: 'Professional paving installation in South-West Sydney', description: 'We design and install high-quality paving for driveways, pathways, pool surrounds, and entertaining areas using durable materials built for the Australian climate.' },
          { image: '/images/service-turf.jpg', title: 'Turf Installation', imageAlt: 'Premium turf installation on residential lawn', description: "From full lawn installations to patch repairs, we supply and lay premium turf varieties suited to South-West Sydney's conditions for a lush, long-lasting result." },
          { image: '/images/service-retaining.jpg', title: 'Retaining Walls', imageAlt: 'Retaining wall construction in South-West Sydney', description: 'Our team constructs structurally sound and visually appealing retaining walls using timber, sleepers, blocks, or natural stone to manage slopes and define spaces.' },
          { image: '/images/service-decking.jpg', title: 'Decking', imageAlt: 'Custom timber and composite deck installation', description: "We build custom timber and composite decks that seamlessly extend your indoor living space outdoors, designed to complement your home's style and withstand the elements." },
          { image: '/images/service-garden.jpg', title: 'Garden Design & Planting', imageAlt: 'Professional garden design and planting service', description: 'From concept to completion, we create tailored garden designs that blend aesthetics with practicality — selecting plants, features, and layouts that suit your block and lifestyle.' },
          { image: '/images/service-transformation.jpg', title: 'Full Outdoor Transformations', imageAlt: 'Complete outdoor transformation managed by Harris Landscaping', description: 'Need everything done? We manage end-to-end outdoor renovations for homeowners and builders — coordinating all trades, materials, and timelines under one roof.' },
        ]}
        heading="Our Landscaping Services"
      />
      <TrustBadges
        items={[
          { icon: '/icons/experience.svg', label: '15+ Years Experience' },
          { icon: '/icons/insured.svg', label: 'Fully Insured' },
          { icon: '/icons/projects.svg', label: '500+ Projects Completed' },
          { icon: '/icons/star.svg', label: '5-Star Google Rating' },
          { icon: '/icons/quote.svg', label: 'Free Obligation-Free Quotes' },
          { icon: '/icons/local.svg', label: 'Local South-West Sydney Team' },
        ]}
      />
      <CtaBanner
        cta="Request a Free Quote"
        ctaHref="/contact"
        heading="Ready to Get Started on Your Outdoor Project?"
        subheading="Contact Harris Landscaping & Gardens today for a free, detailed quote. Serving Campbelltown, Camden, Narellan, Picton and the wider South-West Sydney region."
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
