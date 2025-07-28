import { Suspense } from 'react';
import CollectionSection from '@/components/Collection/CollectionSection';

export default function CollectionPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading collections...</div>}>
        <CollectionSection />
      </Suspense>
    </main>
  );
}
