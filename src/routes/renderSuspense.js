import React, {Suspense} from 'react'

// Implemented Components
import Loader from 'components/Loader';

/**
 * Renderer function for suspended components
 *
 * @param RouteComponent React.Component
 * @param componentProps Object
 */
const renderSuspense = (
  RouteComponent,
  componentProps
) => (routerProps) => {
  const props = {
    ...routerProps,
    ...componentProps
  };

  return (
    <Suspense fallback={<Loader />}>
      <RouteComponent {...props} />
    </Suspense>
  );
}

export default renderSuspense;
