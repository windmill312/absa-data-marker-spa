import React from 'react';

const Fallback = ({ isLoading, children, Component }) => (isLoading ? <Component /> : <>{children}</>);

export default Fallback;
