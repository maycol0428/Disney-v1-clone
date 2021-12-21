import Originals from "./Originals";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
// import DATA from "../disneyPlusMoviesData.json";
import { useEffect } from "react";
import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { SelectUserName } from "../features/user/userSlice";
import { setMovies } from "../features/user/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector(SelectUserName);
  let recomendsArray = [];
  let newDisneysArray = [];
  let OriginalsArray = [];
  let TrendingsArray = [];
  useEffect(() => {
    // Object.values(DATA.movies).map(async (item) => {
    //   const res = await db.collection("movies").add({
    //     ...item,
    //   });
    // });
    db.collection("movies").onSnapshot((docSs) => {
      docSs.docs.map((doc) => {
        // eslint-disable-next-line default-case
        switch (doc.data().type) {
          case "recommend":
            recomendsArray = [...recomendsArray, { id: doc.id, ...doc.data() }];
            // recomendsArray.push({
            //   id: doc.id,
            //   ...doc.data(),
            // });
            break;
          case "new":
            newDisneysArray.push({
              id: doc.id,
              ...doc.data(),
            });
            break;
          case "trending":
            TrendingsArray.push({
              id: doc.id,
              ...doc.data(),
            });
            break;
          case "original":
            OriginalsArray.push({
              id: doc.id,
              ...doc.data(),
            });
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recomendsArray,
          newDisney: newDisneysArray,
          original: OriginalsArray,
          trending: TrendingsArray,
        })
      );
    });
  }, [username]);

  return (
    <StyledContainer>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Recommends></Recommends>
      <NewDisney></NewDisney>
      <Originals></Originals>
      <Trending></Trending>
    </StyledContainer>
  );
};

export default Home;
const StyledContainer = styled.div`
  position: relative;
  min-height: (100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    content: "";
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
