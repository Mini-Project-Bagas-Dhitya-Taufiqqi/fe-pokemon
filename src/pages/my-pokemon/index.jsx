import React from "react";
import Container from "../../components/Container";
import Card from "../../components/Card";

const MyPokemon = () => {
  return (
    <Container>
      <div className="h-screen">
        <div className="h-max w-max">
          <Card type={"information"}>test</Card>
        </div>
      </div>
    </Container>
  );
};

export default MyPokemon;
