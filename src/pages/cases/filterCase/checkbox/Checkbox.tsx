import React, { useState } from "react";
import styled from "styled-components";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    children: React.ReactNode;
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxBox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid ${(props) => (props.checked ? "#32CD32" : "#ccc")};
  background-color: ${(props) => (props.checked ? "#32CD32" : "#fff")};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxTick = styled.span<{ checked: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 1px;
  background-color: ${(props) => (props.checked ? "#fff" : "transparent")};
`;

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, children }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const handleCheckboxChange = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onChange(newValue);
    };

    return (
        <CheckboxContainer>
            <CheckboxBox checked={isChecked} onClick={handleCheckboxChange}>
                <CheckboxTick checked={isChecked} />
            </CheckboxBox>
            <span onClick={handleCheckboxChange}>{children}</span>
        </CheckboxContainer>
    );
};
