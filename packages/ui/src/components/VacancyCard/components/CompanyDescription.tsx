import styled from "styled-components";
import { useTheme } from "../../../theme";
import { H5, P4 } from "../../../typography";
import { Avatar } from "../../index";

export const CompanyDescription = () => {
  const theme = useTheme();

  return (
    <Container>
      <Avatar>V</Avatar>

      <DescriptionContainer>
        <H5>Company Name</H5>
        <P4>User Name, HR manager</P4>
        <P4 style={{ color: theme.palette.secondary.dark }}>01 may, 2022</P4>
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
