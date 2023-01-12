import { Footer, Header, Vacancy } from "@/features";
import { Layout } from "@hs-job/ui";

const Index = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Vacancy />
    </Layout>
  );
};

export default Index;
