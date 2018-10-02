import React from 'react';
import CompareModalWeb from './CompareModalWeb';
import CompareModalMobile from './CompareModalMobile';
import MediaQuery from 'react-responsive';

const CompareModalHOC = (props) => {
  return (
    <div>
      {/* for larger screens */}
      <MediaQuery minWidth={700}>
        <CompareModalWeb {...props} />
      </MediaQuery>

      {/* for smaller screens */}
      <MediaQuery maxWidth={699}>
        <CompareModalMobile {...props} />
      </MediaQuery>
    </div>
  )
}

export default CompareModalHOC;
