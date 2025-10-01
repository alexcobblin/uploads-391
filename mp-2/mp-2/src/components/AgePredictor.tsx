import styled from "styled-components";
import type { People } from "../interfaces/People.ts";

const AllPeopleDiv = styled.div`
  display: flex;
  flex-flow: row wrap;    
  justify-content: space-evenly;
  background-color: bisque;
  padding: 2%;
`;

const SinglePersonDiv = styled.div`
  display: flex;
  flex-direction: column;   
  justify-content: center;
  max-width: 30%;
  padding: 2%;
  margin: 1%;
  background-color: lightblue;
  color: black;
  border: 3px darkblue solid;
  font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
  text-align: center;
`;


interface AgePredictorProps {
    data: (People & { count?: number })[];
  }

export default function PeopleDisplay({ data }: AgePredictorProps) {
  return (
    <AllPeopleDiv>
      {data.map((person, index) => (
        <SinglePersonDiv key={index}>
          <h1>{person.name}</h1>
          <p>Predicted Age: {person.age}</p>
          {person.count !== undefined && <p>Personal ID: {person.count}</p>}
        </SinglePersonDiv>
      ))}
    </AllPeopleDiv>
  );
}