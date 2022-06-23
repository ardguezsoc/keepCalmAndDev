import{ Suspense, lazy } from 'react';

// Load the 16 icons async inside an array
const icons = Array.from({ length: 16 }, (_, idx) => idx + 1).map((id) =>
  lazy(() => import(`components/CardImage/CardImage${id}`)),
);

// min and max included
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** random svg illustrations used in cards  */
export const ResultCardImage = ({ ...rest }) => {
  const Icon = icons[random(0, 15)];
  return (
    <Suspense fallback={<div style={{ paddingTop: '75%' }} />}>
      <Icon {...rest} />
    </Suspense>
  );
};
