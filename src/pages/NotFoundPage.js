import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({ history }) => {
  useEffect(() => {
    history.push('/tune');
  });

  return <div>Loading</div>;
};

export default withRouter(NotFoundPage);
