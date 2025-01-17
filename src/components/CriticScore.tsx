import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" paddingX="3px" borderRight={4} colorScheme={color}>
      {" "}
      {score}{" "}
    </Badge>
  );
};

export default CriticScore;
