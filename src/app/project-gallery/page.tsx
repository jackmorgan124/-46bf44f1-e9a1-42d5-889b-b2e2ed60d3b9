import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import Gallery from '@/components/blocks/gallery';
import CtaSplit from '@/components/blocks/cta-split';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Project Gallery | Harris Landscaping & Gardens',
  description:
    'Browse our before-and-after showcase of residential landscaping projects across South-West Sydney — from paving and turf to full outdoor transformations.',
};

export default function ProjectGalleryPage() {
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
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Backyard Paving Transformation — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Full Lawn Turf Installation — Narellan', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Retaining Wall & Garden Design — Picton', before: '/images/before-3.jpg' },
          { after: '/images/after-4.jpg', label: 'Custom Timber Decking — Camden', before: '/images/before-4.jpg' },
          { after: '/images/after-5.jpg', label: 'Full Outdoor Transformation — Ingleburn', before: '/images/before-5.jpg' },
        ]}
        heading="Before & After Transformations"
        subheading="See the difference Harris Landscaping & Gardens makes — real residential projects across South-West Sydney."
      />
      <Gallery
        images={[
          { alt: 'Paved driveway and pathway installation — Campbelltown', src: '/images/gallery-1.jpg' },
          { alt: 'Premium turf installation across full residential lawn — Narellan', src: '/images/gallery-2.jpg' },
          { alt: 'Natural stone retaining wall — Picton', src: '/images/gallery-3.jpg' },
          { alt: 'Custom composite decking — Camden', src: '/images/gallery-4.jpg' },
          { alt: 'Tailored garden design and planting — Campbelltown', src: '/images/gallery-5.jpg' },
          { alt: 'Full outdoor transformation including paving, turf and garden — Ingleburn', src: '/images/gallery-6.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our before-and-after showcase of residential landscaping projects across South-West Sydney. From paving and turf to full outdoor transformations — see what Harris Landscaping & Gardens can do for your property."
      />
      <CtaSplit
        cta="Start Your Transformation"
        image="/images/cta-outdoor.jpg"
        ctaHref="/contact"
        heading="Ready to Transform Your Outdoor Space?"
        imageAlt="Beautifully completed outdoor landscaping project in South-West Sydney"
        subheading="Get in touch with our team today for a free, obligation-free quote tailored to your project and suburb."
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium outdoor transformations across South-West Sydney, backed by 15+ years of experience and a fully insured, detail-driven team."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          { heading: 'Services', links: [{ href: '/services#paving', label: 'Paving' }, { href: '/services#turf-installation', label: 'Turf Installation' }, { href: '/services#retaining-walls', label: 'Retaining Walls' }, { href: '/services#decking', label: 'Decking' }, { href: '/services#garden-design', label: 'Garden Design' }, { href: '/services#full-outdoor-transformations', label: 'Full Outdoor Transformations' }] },
          { heading: 'Service Areas', links: [{ href: '/service-areas/campbelltown', label: 'Campbelltown' }, { href: '/service-areas/camden', label: 'Camden' }, { href: '/service-areas/narellan', label: 'Narellan' }, { href: '/service-areas/picton', label: 'Picton' }, { href: '/service-areas/ingleburn', label: 'Ingleburn' }, { href: '/service-areas/macarthur', label: 'Macarthur Region' }] },
          { heading: 'Company', links: [{ href: '/about', label: 'About Us' }, { href: '/gallery', label: 'Project Gallery' }, { href: '/contact', label: 'Contact Us' }, { href: '/contact', label: 'Get a Free Quote' }] },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
