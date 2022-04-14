import styled from "@emotion/styled";

const H1 = styled.h1({
  color: "black",
  fontSize: "2rem",
  marginTop: "0",
});

const TitleComponent = ({ title }) => {
  return <H1 className="">{title}</H1>;
};

export default TitleComponent;
