import React from 'react';
import { LoadingOverlay, LoadingSpinner } from './Loading.style';
import LoadingPortal from './LoadingPortal';

interface Props {
  isLoading: boolean;
}

function Loading({ isLoading }: Props) {
  console.log(isLoading);

  if (!isLoading) return <></>;

  return (
    <LoadingPortal>
      <LoadingOverlay>
        <LoadingSpinner />
      </LoadingOverlay>
    </LoadingPortal>
  );
}

export default Loading;
