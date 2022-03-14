import { Container, ButtonContainer, GetStartedBtn } from "./style";
import { Header } from "../../components";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <Header />
      <Container>
        <h3>Tasks, Just Tasks</h3>
        <p>Keep track of daily tasks and gain satisfaction on completion</p>
        <ButtonContainer>
          <Link to="/tasks">
            <a href="/">
              <GetStartedBtn>Get Started</GetStartedBtn>
            </a>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
};
