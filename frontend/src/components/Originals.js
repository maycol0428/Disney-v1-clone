import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectOriginal } from "../features/user/movieSlice";
const Originals = (props) => {
  const originals = useSelector(SelectOriginal);
  return (
    <StyledContainer>
      <h4>Originals</h4>
      <StyledContent>
        {originals &&
          originals.map((originalMovie, key) => {
            return (
              <StyledWrap key={key}>
                {originalMovie.id}
                <Link to={"/detail/" + originalMovie.id}>
                  <img src={originalMovie.cardImg} alt={originalMovie.title} />
                </Link>
              </StyledWrap>
            );
          })}
      </StyledContent>
    </StyledContainer>
  );
};

export default Originals;
const StyledContainer = styled.div`
  padding: 0 0 26px;
`;
const StyledContent = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const StyledWrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgb(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  :hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
