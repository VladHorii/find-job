import { Container } from "@/components";
import React from "react";
import styled from "styled-components";
import { Banner, Card, CardProps } from "./components";

export const Vacancy = () => {
  const vacancyList: CardProps[] = [
    {
      id: "0",
      title: "Junior React Developer",
      jobVariant: "Office",
      companyType: "Outsource",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
    },
    {
      id: "1",
      title: "Middle React Developer",
      jobVariant: "Remote",
      companyType: "Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
    },
    {
      id: "2",
      title: "Senior React Developer",
      jobVariant: "Remote or Office",
      companyType: "Outstaff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
    },
  ];

  return (
    <>
      <Banner />

      <Container>
        <List>
          {vacancyList.map((element) => (
            <Card
              key={element.id}
              title={element.title}
              jobVariant={element.jobVariant}
              companyType={element.companyType}
              description={element.description}
            />
          ))}
        </List>
      </Container>
    </>
  );
};

const List = styled.ul`
  cursor: pointer;

  display: flex;
  flex-direction: column;

  gap: 30px;
`;
