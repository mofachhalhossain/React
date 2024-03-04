import { Box } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Avatar({ ...props }) {
  // eslint-disable-next-line react/prop-types
  const { style, alt } = props;
  return (
    <>
      <img
        src="https://react.dev/images/home/conf2021/cover.svg"
        // eslint-disable-next-line react/prop-types
        alt={alt.alt}
        style={style}
      />
    </>
  );
}

function Card({ ...props }) {
  // eslint-disable-next-line react/prop-types
  const { style, alt } = props;
  return (
    <>
      <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
        <Avatar style={style} alt={alt} />
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
      <Card style={{ borderRadius: "20px" }} alt={{ alt: "ReactJS" }} />
    </>
  );
}

export default CardGallery;
