import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectContainer>
      {/* {label}        */}
      {/* <select value={value} onChange={onChange}>
        {children}
      </select> */}
      <NativeSelect
        role="combobox"
        aria-expanded="false"
        aria-autocomplete="none"
        aria-haspopup="listbox"
        aria-controls=":r1f5:"
        onChange={onChange}
        value={value}
      >
        {children}
        {/* <IconSelector>
          <Icon id="chevron-down" />
        </IconSelector> */}
      </NativeSelect>
      <PresentationalSelect>
        {/* <SelectList id=":r1f5:"></SelectList> */}
        {displayedValue}
        <IconWrapper size={24}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalSelect>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover ~ & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  pointer-events: none;
`;

export default Select;
