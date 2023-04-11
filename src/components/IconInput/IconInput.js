import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const isLarge = size === "large";
  const iconSize = isLarge ? 24 : 16;
  let finalProps = {
    height: 24,
    width,
    border: 1,
    fontSize: 14,
    lineHeight: 16,
  };

  if (isLarge) {
    finalProps = {
      ...finalProps,
      height: 36,
      border: 2,
      fontSize: 18,
      lineHeight: 21,
    };
  }

  return (
    <IconInputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={iconSize}>
        <Icon size={iconSize} strokeWidth={1} id={icon} />
      </IconWrapper>
      <NativeInput {...finalProps} {...delegated} />
    </IconInputWrapper>
  );
};

const IconInputWrapper = styled.label`
  color: ${COLORS.gray700};
  display: block;
  position: relative;
  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  border: none;
  border-bottom: ${(props) => props.border}px solid ${COLORS.black};
  color: ${COLORS.gray500};
  font-weight: 700;
  height: ${(props) => props.height}px;
  font-size: calc(${(props) => props.fontSize} / 16) rem;
  line-height: ${(props) => props.lineHeight}px;
  outline-offset: 2px;
  padding-left: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  &::placeholder {
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  color: inherit;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export default IconInput;
