import React, { useState } from 'react';

interface CheckboxWithLabelProps {
  labelOn: string;
  labelOff: string;
}

const CheckboxWithLabel = ({
  labelOn,
  labelOff,
}: CheckboxWithLabelProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor="checkbox">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};

export default CheckboxWithLabel;
