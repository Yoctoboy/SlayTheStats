import { useState } from 'react';
import ArchiveDropzone from '../ArchiveDropzone/ArchiveDropzone';
import { HomePageContainer } from './HomePage.style';

function HomePage() {
  return (
    <HomePageContainer>
      <ArchiveDropzone />
    </HomePageContainer>
  );
}

export default HomePage;
