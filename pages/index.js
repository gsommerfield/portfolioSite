import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const Heading = styled.h1`
  color: black;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>George Sommerfield</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>HOMEPAGE</Heading>
      </Hero>
    </>
  );
}
