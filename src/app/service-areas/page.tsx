import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import ServiceAreaGrid from '@/components/blocks/service-area-grid';
import ImageTextSplit from '@/components/blocks/image-text-split';
import CtaBanner from '@/components/blocks/cta-banner';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Service Areas | Harris Landscaping & Gardens',
  description:
    'Harris Landscaping & Gardens proudly services homeowners and builders across South-West Sydney — Campbelltown, Camden, Narellan, Picton, Ingleburn and the wider Macarthur region.',
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
      <ServiceAreaGrid
        areas={[
          { href: '/service-areas/campbelltown', name: 'Campbelltown' },
          { href: '/service-areas/camden', name: 'Camden' },
          { href: '/service-areas/narellan', name: 'Narellan' },
          { href: '/service-areas/picton', name: 'Picton' },
          { href: '/service-areas/ingleburn', name: 'Ingleburn' },
          { href: '/service-areas/macarthur', name: 'Macarthur Region' },
        ]}
        heading="Landscaping Services Across South-West Sydney"
        subheading="Harris Landscaping & Gardens proudly services homeowners and builders throughout the South-West Sydney region. Select your suburb below to learn more about our work in your area."
      />
      <ImageTextSplit
        cta="Get a Free Quote for Your Suburb"
        body="With over 15 years working across the Macarthur region, we understand the unique needs of South-West Sydney properties — from sloping blocks in Picton to new home builds in Narellan. Our team brings local expertise, premium materials, and reliable project management to every suburb we service. Whether you're refreshing an established garden in Campbelltown or starting from scratch in Camden, Harris Landscaping & Gardens is your trusted local partner."
        image="/images/service-area.jpg"
        ctaHref="/contact"
        heading="Your Local South-West Sydney Landscaping Experts"
        imageAlt="Harris Landscaping & Gardens team servicing a residential property in South-West Sydney"
        imagePosition="right"
      />
      <CtaBanner
        cta="Get a Free Quote for Your Suburb"
        ctaHref="/contact"
        heading="Serving Your Suburb — Get a Free Quote Today"
        subheading="No matter where you are in South-West Sydney, Harris Landscaping & Gardens is ready to bring your outdoor vision to life."
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
