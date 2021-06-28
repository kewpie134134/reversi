import React from 'react';

interface CustomLabelProps {
  customLabel: string;
}

const CustomLabel = (props: CustomLabelProps): JSX.Element => {
  const { customLabel } = props;
  return <label htmlFor="customLabel">{customLabel}</label>;
};

export default CustomLabel;
