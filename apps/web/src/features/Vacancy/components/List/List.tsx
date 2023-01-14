import { Container, VacancyCard, VacancyCardProps } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const List = () => {
  const vacancyList: VacancyCardProps[] = [
    {
      id: "0",
      title: "Senior React Developer",
      jobVariant: "Remote or Office",
      companyType: "Outstaff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
      companyName: "Company Name",
      companyHr: "User Name, HR manager",
      publicationDate: "01 may, 2022",
    },
    {
      id: "1",
      title: "Senior React Developer",
      jobVariant: "Remote or Office",
      companyType: "Outstaff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
      companyName: "Company Name",
      companyHr: "User Name, HR manager",
      publicationDate: "01 may, 2022",
    },
    {
      id: "2",
      title: "Senior React Developer",
      jobVariant: "Remote or Office",
      companyType: "Outstaff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
      companyName: "Company Name",
      companyHr: "User Name, HR manager",
      publicationDate: "01 may, 2022",
    },
    {
      id: "3",
      title: "Senior React Developer",
      jobVariant: "Remote or Office",
      companyType: "Outstaff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
      companyName: "Company Name",
      companyHr: "User Name, HR manager",
      publicationDate: "01 may, 2022",
    },
    {
      id: "4",
      title: "Senior React Developer",
      jobVariant: "Remote or Office",
      companyType: "Outstaff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
      companyName: "Company Name",
      companyHr: "User Name, HR manager",
      publicationDate: "01 may, 2022",
    },
  ];

  return (
    <Container>
      <MyList>
        {vacancyList.map((vacancy) => (
          <VacancyCard
            key={vacancy.id}
            title={vacancy.title}
            jobVariant={vacancy.jobVariant}
            companyType={vacancy.companyType}
            description={vacancy.description}
            companyName={vacancy.companyName}
            companyHr={vacancy.companyHr}
            publicationDate={vacancy.publicationDate}
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
