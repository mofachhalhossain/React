import { Box } from "@chakra-ui/react";

function Card() {
  return (
    <>
      <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
        <h1>Card Head</h1>
        <h2>Card Subhead</h2>
        <p>Card Body</p>
        <a href="#">Card Link</a>
      </Box>
    </>
  );
}

function CardGallery() {
  return (
    <>
      <Card />
      <Card />
    </>
  );
}

export default CardGallery;
