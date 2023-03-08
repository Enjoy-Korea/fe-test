import React from "react";
import styled from "styled-components";

interface CheckboxProps {
  value: boolean;
  title: string;
  onChecked?: (checked: boolean) => void;
}

export const Checkbox = ({ value, title, onChecked }: CheckboxProps) => {
  return (
    <CheckboxLayout>
      <Input
        id={title}
        type="checkbox"
        onChange={onChecked ? (e) => onChecked(e.target.checked) : undefined}
        value={title}
        checked={value}
      />
      <CheckboxLabel htmlFor={title}>{title}</CheckboxLabel>
    </CheckboxLayout>
  );
};

const CheckboxLayout = styled.div`
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input``;

const CheckboxLabel = styled.label`
  font-size: 18px;

  margin-left: 10px;

  white-space: nowrap;
`;
