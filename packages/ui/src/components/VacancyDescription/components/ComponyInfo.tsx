import { Product, RemoteWork } from "@hs-job/icons";
import { ComponyInfoProps } from "@hs-job/types";
import React, { FC } from "react";
import styled from "styled-components";
import { P3 } from "../../../typography";

export const ComponyInfo: FC<ComponyInfoProps> = ({
  jobVariant,
  companyType,
}) => {
  return (
    <List>
      <Item>
        <RemoteWork />
        <Text>{jobVariant}</Text>
      </Item>

      <Item>
        <Product />
        <Text>{companyType}</Text>
      </Item>
    </List>
  );
};

const List = styled.ul`
  display: flex;
  align-items: center;

  gap: 20px;
`;

const Item = styled.li`
  display: flex;

  gap: 5px;
`;

const Text = styled(P3)`
  color: ${(props) => props.theme.palette.secondary.dark};
`;
