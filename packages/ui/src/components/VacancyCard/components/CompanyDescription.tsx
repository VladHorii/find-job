import { CompanyDescriptionProps } from "@hs-job/types";
import { FC } from "react";
import styled from "styled-components";
import { useTheme } from "../../../theme";
import { H5, P4 } from "../../../typography";
import { Avatar } from "../../index";

export const CompanyDescription: FC<CompanyDescriptionProps> = ({
  companyName,
  companyHr,
  publicationDate,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <Avatar>V</Avatar>

      <DescriptionContainer>
        <H5>{companyName}</H5>
        <P4>{companyHr}</P4>
        <P4 style={{ color: theme.palette.secondary.dark }}>
          {publicationDate}
        </P4>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
