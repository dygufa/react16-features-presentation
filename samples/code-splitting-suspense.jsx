import React, { lazy, Suspense } from 'react';
const OtherComponent = lazy(() => import('./OtherComponent'));

function MyComponent() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
        </Suspense>
    );
}