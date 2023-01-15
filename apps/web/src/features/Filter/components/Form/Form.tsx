import { Search } from "@hs-job/icons";
import { Button, Checkbox, Input, Label, P2, P3 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const Form = () => {
  return (
    <MyForm>
      <Wrapper>
        <Label>
          <P3>Find by job description:</P3>
          <InputStyled
            placeholder={"Example: Front-end dev"}
            icon={<Search />}
          />
        </Label>

        <Label direction={"row"} align={"center"} gap={"6px"}>
          <Checkbox />
          <P2>Advanced Search</P2>
        </Label>
      </Wrapper>

      <Wrapper margin={"10px 0 0 0"}>
        <Label>
          <P3>Include words:</P3>
          <InputStyled placeholder={"Example: middle senior"} />
        </Label>

        <Label>
          <P3>Exclude words:</P3>
          <InputStyled placeholder={"Example: junior fullstack angular"} />
        </Label>
      </Wrapper>

      <ContainerControls>
        <Button>Search</Button>
      </ContainerControls>
    </MyForm>
  );
};

const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const Wrapper = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin: ${(props) => props.margin || "0"};
`;

const InputStyled = styled(Input)`
  &.MuiInputBase-root {
    width: 100%;
  }
`;

const ContainerControls = styled.div`
  display: flex;
  justify-content: end;

  gap: 15px;
`;
