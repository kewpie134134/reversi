import React from 'react';

interface CustomLabelProps {
  customLabel: string;
}

const CustomLabel = (props: CustomLabelProps) => {
  return <>{props.customLabel}</>;
};

export default CustomLabel;
