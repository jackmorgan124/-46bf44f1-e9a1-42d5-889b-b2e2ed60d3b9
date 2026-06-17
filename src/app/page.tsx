import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import HeroSplit from '@/components/blocks/hero-split';
import ServicesGrid from '@/components/blocks/services-grid';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import ReviewsCarousel from '@/components/blocks/reviews-carousel';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Harris Landscaping & Gardens | South-West Sydney Landscapers',
  description:
    "From paving and turf to full garden makeovers, Harris Landscaping & Gardens delivers premium outdoor transformations across Campbelltown, Camden, Narellan, Picton and beyond.",
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
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Transform Your Outdoor Space With South-West Sydney's Trusted Landscapers"
        imageAlt="Beautiful outdoor landscaping transformation in South-West Sydney by Harris Landscaping & Gardens"
        trustBadge="Trusted by 500+ homeowners across South-West Sydney"
        subheadline="From paving and turf to full garden makeovers, Harris Landscaping & Gardens delivers premium outdoor transformations across Campbelltown, Camden, Narellan, Picton and beyond — backed by 15+ years of experience."
      />
      <ServicesGrid
        items={[
          'Paving — Durable, stylish paving solutions for driveways, pathways, and entertaining areas',
          'Turf Installation — Lush, professional-grade turf laid to last for lawns of every size',
          "Retaining Walls — Structural and decorative retaining walls built to handle South-West Sydney's terrain",
          'Decking — Custom timber and composite decking to extend your living space outdoors',
          'Garden Design — Tailored garden designs that suit your lifestyle, block, and budget',
          'Full Outdoor Transformations — End-to-end project management from concept to completion',
        ]}
        heading="Everything Your Outdoor Space Needs"
        subheading="We offer a complete range of landscaping services designed to enhance the beauty, function, and value of your property."
      />
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Backyard Paving Transformation — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Full Lawn Turf Installation — Narellan', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Retaining Wall & Garden Design — Picton', before: '/images/before-3.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our before-and-after showcase of residential landscaping projects across South-West Sydney."
      />
      <ReviewsCarousel
        items={[
          { author: 'Sarah M., Campbelltown', rating: '5', review: 'Harris Landscaping transformed our backyard completely. Professional, on time, and the results exceeded our expectations. Highly recommend!' },
          { author: 'James T., Narellan', rating: '5', review: 'Fantastic work on our new turf and paving. The team was easy to deal with and delivered exactly what was promised. Will use again.' },
          { author: 'Kylie R., Camden', rating: '5', review: "We had a retaining wall and full garden design done. Couldn't be happier — the crew were polite, tidy, and the quality is outstanding." },
        ]}
        heading="What Our Clients Are Saying"
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
