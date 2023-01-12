import {
  Container,
  VacancyCard,
  VacancyDescription,
  VacancyDescriptionProps,
} from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const List = () => {
  const vacancyList: VacancyDescriptionProps[] = [
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
    <Container>
      <MyList>
        <VacancyCard
          title={"Senior React Developer"}
          jobVariant={"Remote or Office"}
          companyType={"Outstaff"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam..."
          }
          companyName={"Company Name"}
          companyHr={"User Name, HR manager"}
          publicationDate={"01 may, 2022"}
        />

        {vacancyList.map((element) => (
          <VacancyDescription
            key={element.id}
            title={element.title}
            jobVariant={element.jobVariant}
            companyType={element.companyType}
            description={element.description}
          />
        ))}
      </MyList>
    </Container>
  );
};

const MyList = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;

  gap: 30px;
`;
