import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { FURNITURE_ITEMS } from '@/data/furnitureData';
import ProductView from '@/components/product/ProductView';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = FURNITURE_ITEMS.find((p) => p.id === id || p.slug === id);

  if (!product) {
    return {
      title: 'Piece Not Found | Craftora Atelier',
    };
  }

  return {
    title: `${product.name} | Craftora Bespoke Furniture`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Craftora Bespoke Furniture`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = FURNITURE_ITEMS.find((p) => p.id === id || p.slug === id) || FURNITURE_ITEMS[0];

  return <ProductView product={product} />;
}
