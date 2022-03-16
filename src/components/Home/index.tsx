import React from "react";
import { Container, ButtonContainer, GetStartedBtn } from "./style";
import { Header } from "../index";
import Link from "next/link";

export const Homepage = () => {
  return (
    <>
      <Header />
      <Container>
        <h3>Tasks, Just Tasks</h3>
        <p>Keep track of daily tasks and gain satisfaction on completion</p>
        <ButtonContainer>
          <Link href="/tasks">
            <GetStartedBtn>Get Started</GetStartedBtn>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
};
