import { Label, P3, P4 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export const Tags = () => {
  const includeWords = [
    { id: "0", title: "JavaScript / Front-End" },
    { id: "1", title: "Java" },
    { id: "2", title: "Python" },
    { id: "3", title: "PHP" },
    { id: "4", title: "Node.js" },
    { id: "5", title: "JavaScript / Front-End" },
    { id: "6", title: "Java" },
    { id: "7", title: "Python" },
  ];

  return (
    <Container>
      <Label>
        <P4>Include words:</P4>

        <Swiper slidesPerView={0} spaceBetween={3}>
          {includeWords.map((element) => (
            <SwiperSlideStyled key={element.id}>
              <Text>{element.title}</Text>
            </SwiperSlideStyled>
          ))}
        </Swiper>
      </Label>

      <Label>
        <P4>Exclude words:</P4>

        <Swiper slidesPerView={0} spaceBetween={3}>
          {includeWords.map((element) => (
            <SwiperSlideStyled key={element.id}>
              <Text>{element.title}</Text>
            </SwiperSlideStyled>
          ))}
        </Swiper>
      </Label>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  margin-top: 30px;
  gap: 30px;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: fit-content;

  display: flex;
  justify-content: center;

  padding: 2px;

  border-radius: 1px;
  background-color: ${(props) => props.theme.palette.actions.hover};
`;

const Text = styled(P3)`
  color: ${(props) => props.theme.palette.common.white};
`;
