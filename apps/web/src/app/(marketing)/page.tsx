import { CategoryBento } from '@/components/marketing/CategoryBento';
import { CollectionShowcase } from '@/components/marketing/CollectionShowcase';
import { ConsultationCTA } from '@/components/marketing/ConsultationCTA';
import { FeaturedStrip } from '@/components/marketing/FeaturedStrip';
import { Hero } from '@/components/marketing/Hero';
import { SocialProof } from '@/components/marketing/SocialProof';
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({ path: '/' });

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <FeaturedStrip />
      <CategoryBento />
      <CollectionShowcase />
      <SocialProof />
      <ConsultationCTA />
    </>
  );
}
