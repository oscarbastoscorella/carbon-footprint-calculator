import "swiper/css";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./Card";
import { CarouselSkeleton } from "./CarouselSkeleton";
import type { EnergyConsumption } from "@ts-types/electricity";
import { Flex } from "@chakra-ui/react";
import { FreeMode } from "swiper/modules";

type CardListProps = {
  data?: EnergyConsumption[];
  isLoading?: boolean;
};

export default function Carousel({
  data = [],
  isLoading = false,
}: CardListProps) {
  if (isLoading) {
    return <CarouselSkeleton />;
  }

  return (
    <Flex
      cursor={"grab"}
      role="region"
      aria-label="Energy Consumption Carousel"
    >
      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        spaceBetween={8}
        slidesPerView="auto"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ width: "210px", height: "115px" }}
          >
            <Card energyConsumption={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
