import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card>
      <Skeleton width={130} height={50}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GenreListSkeleton;
