import { Banner, Header, MainInfo } from "@/features";
import { Footer, Layout } from "@hs-job/ui";
import React from "react";

const Index = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Banner />
      <MainInfo />
    </Layout>
  );
};

export default Index;
