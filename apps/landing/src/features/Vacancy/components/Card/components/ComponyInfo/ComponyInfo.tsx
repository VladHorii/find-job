import { Product, RemoteWork } from "@hs-job/icons";
import { P3 } from "@hs-job/ui";
import React, { FC } from "react";
import styled from "styled-components";
import { ComponyInfoProps } from "../../types";

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
