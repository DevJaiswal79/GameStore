import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <HStack>
              <Spinner />
              <GenreListSkeleton key={skeleton} />
            </HStack>
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
