import { Header, SearchBar, VacancyList } from "@/features";
import { Container, Footer, Layout } from "@hs-job/ui";
import styled from "styled-components";

const Index = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container>
        <Wrapper>
          <SearchBar />
          <VacancyList />
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Index;

const Wrapper = styled.div``;
