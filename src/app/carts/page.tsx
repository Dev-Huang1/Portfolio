'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { CartCard } from '@/components/carts/cart-card';
import { CartFilters } from '@/components/carts/cart-filters';
import { products } from '@/data/products';
import BlurFade from '@/components/magicui/blur-fade';
import { CartSkeleton } from "@/components/skeletons/cart-skeleton";

export default function GadgetsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.category)));
  }, []);

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="container max-w-6xl mx-auto px-4 py-12">
      <Suspense fallback={<CartSkeleton />}>
        <BlurFade>
          <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Cart 🛒</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My shopping cart!🛒 Here are the things I like😇🔥
            </p>
          </div>
          
          <div className="space-y-8">
            <CartFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No gadgets found matching your criteria
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <CartCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </BlurFade>
      </Suspense>
    </main>
  );
}
