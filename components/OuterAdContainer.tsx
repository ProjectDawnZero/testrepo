import React from 'react';
import AdHorizontalTop from './AdHorizontalTop';
import AdHorizontalBottom from './AdHorizontalBottom';
import AdVerticalLeft from './AdVerticalLeft';
import AdVerticalRight from './AdVerticalRight';

type OuterAdContainerProps = {
  children: React.ReactNode;
};

export default function OuterAdContainer({ children }: OuterAdContainerProps) {
  return (
    <>
      <AdHorizontalTop />
      <div className="flex flex-row">
        <AdVerticalLeft />
        {children}
        <AdVerticalRight />
      </div>
      <AdHorizontalBottom />
    </>
  );
}
