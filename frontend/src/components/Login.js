import styled from "styled-components";
const Login = (props) => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledCTA>
          <StyledCTALogoOne src="/images/cta-logo-one.svg"></StyledCTALogoOne>
          <StyledSignUp>GET ALL THERE</StyledSignUp>
          <StyledDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nam et repellendus omnis libero neque temporibus non tenetur ab ut,
            voluptatibus aut eos eaque numquam perspiciatis consequuntur aliquid
            quisquam aspernatur?
          </StyledDescription>
          <StyledCTALogoTwo src="/images/cta-logo-two.png"></StyledCTALogoTwo>
        </StyledCTA>
        <StyledBgImage></StyledBgImage>
      </StyledContent>
    </StyledContainer>
  );
};
export default Login;
const StyledContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const StyledContent = styled.div`
  margin-bottom: 10vw;
  position: relative;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const StyledBgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const StyledCTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-in-out;
  transition: opacity 0.2s;
  width: 100%; */
`;
const StyledCTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const StyledSignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0483ee;
  }
`;
const StyledDescription = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const StyledCTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
