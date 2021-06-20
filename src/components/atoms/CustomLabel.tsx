import React from 'react';

interface CustomLabelProps {
  customLabel: string;
}

const CustomLabel = (props: CustomLabelProps) => {
  return (
    <>
      <label>{props.customLabel}</label>
    </>
  );
};

export default CustomLabel;
