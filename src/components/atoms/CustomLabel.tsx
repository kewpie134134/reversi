import React from 'react';

interface CustomLabelProps {
  customLabel: string;
}

const CustomLabel = (props: CustomLabelProps) => {
  const {customLabel} = props
  return <label>{customLabel}</label>;
};

export default CustomLabel;
