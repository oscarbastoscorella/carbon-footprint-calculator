import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import styled from "@emotion/styled";

type DockCardProps = {
  IconButton: IconType;
};

export function DockCard({ IconButton }: DockCardProps) {
  return (
    <AnimatedButton>
      <Icon w="100%" h="100%" color={"teal.300"}>
        <IconButton />
      </Icon>
    </AnimatedButton>
  );
}

const AnimatedButton = styled.button`
  border-radius: 10px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  aspect-ratio: 1;
  padding: 4px;
  width: 40px;
`;
