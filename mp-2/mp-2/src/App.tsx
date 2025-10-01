import { useState, useEffect } from "react";
import type { People } from "./interfaces/People";
import styled from "styled-components";
import PeopleDisplay from "./components/AgePredictor";

const ParentDiv = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-family: Arial, sans-serif;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: darkorange;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: orangered;
  }
`;


interface AgifyResponse {
  name: string;
  age: number;
  count: number;
}

export default function App(){
  const [name, setName] = useState<string>("michael");
  const [people, setPeople] = useState<(People & { count: number })[]>([]);
  const [input, setInput] = useState<string>("michael");

    useEffect(() => {
        if (!name) return;
    
      async function fetchData(): Promise<void> {
        const res = await fetch(`https://api.agify.io?name=${name}`);
        const data: AgifyResponse = await res.json();
        setPeople([{ name: data.name, age: data.age, count: data.count }]);
      }
        fetchData();
    }, [name]);
    return (
      <ParentDiv>
        <h1>Predict Age by Name</h1>
        <Input
          type="text"
          placeholder="Enter a name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => setName(input)}>Search</Button>

        <PeopleDisplay data={people} />
      </ParentDiv>
    );
  }