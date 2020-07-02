import React from 'react';

const OptionalRender = ({ children, when }) => (when ? <>{children}</> : null);

export default OptionalRender;
