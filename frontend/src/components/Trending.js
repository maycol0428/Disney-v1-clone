import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectTrending } from "../features/user/movieSlice";
const Trending = (props) => {
  const trendings = useSelector(SelectTrending);
  return (
    <StyledContainer>
      <h4>Trendings</h4>
      <StyledContent>
        {trendings &&
          trendings.map((trendingMovie, key) => {
            return (
              <StyledWrap key={key}>
                {trendingMovie.id}
                <Link to={"/detail/" + trendingMovie.id}>
                  <img src={trendingMovie.cardImg} alt={trendingMovie.title} />
                </Link>
              </StyledWrap>
            );
          })}
      </StyledContent>
    </StyledContainer>
  );
};

export default Trending;
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
