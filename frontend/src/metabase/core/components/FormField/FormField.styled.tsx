import styled from "@emotion/styled";
import React from "react";
import { color } from "metabase/lib/colors";
import Icon from "metabase/components/Icon";
import { FieldAlignment, FieldOrientation } from "./types";

export interface FormCaptionProps {
  alignment: FieldAlignment;
  orientation: FieldOrientation;
}

export const FieldCaption = styled.div<FormCaptionProps>`
  margin-left: ${props =>
    props.orientation === "horizontal" &&
    props.alignment === "start" &&
    "0.5rem"};
  margin-right: ${props =>
    props.orientation === "horizontal" &&
    props.alignment === "end" &&
    "0.5rem"};
`;

export interface FieldLabelProps {
  hasError: boolean;
}

export const FieldLabel = styled.label<FieldLabelProps>`
  display: block;
  color: ${props => (props.hasError ? color("error") : color("text-medium"))};
  font-size: 0.77rem;
  font-weight: 900;
`;

export const OptionalTag = styled.span`
  color: ${color("text-medium")};
  font-size: 0.77rem;
  font-weight: 900;
  margin-left: 0.25rem;
`;

export const FieldLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const FieldLabelError = styled.span`
  color: ${color("error")};
`;

export const FieldDescription = styled.div`
  color: ${color("text-medium")};
  margin-bottom: 0.5rem;
`;

export const FieldInfoIcon = styled(Icon)`
  color: ${color("bg-dark")};
  margin-left: 0.5rem;
  width: 0.75rem;
  height: 0.75rem;

  &:hover {
    color: ${color("brand")};
  }
`;

export const FieldInfoLabel = styled.div`
  color: ${color("text-medium")};
  font-size: 0.75rem;
  margin-left: auto;
  cursor: default;
`;

export interface FieldRootProps {
  alignment: FieldAlignment;
  orientation: FieldOrientation;
}

export const FieldRoot = styled.div<FieldRootProps>`
  display: ${props => props.orientation === "horizontal" && "flex"};
  justify-content: ${props =>
    props.alignment === "end" &&
    props.orientation === "horizontal" &&
    "space-between"};
  margin-bottom: 1.25rem;

  &:focus-within {
    ${FieldLabel} {
      color: ${color("text-medium")};
    }

    ${FieldLabelError} {
      display: none;
    }
  }
`;

export const FieldLabelWithContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <FieldLabelContainer>
    <FieldLabel hasError={false}>{children}</FieldLabel>
  </FieldLabelContainer>
);
