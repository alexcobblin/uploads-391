"use client";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import createNewAlias from "@/app/lib/createNewAlias";
import { UrlProps } from "@/types";


const FormWrapper = styled.form`
  width: 400px; /* w-96 */
  padding: 3rem;
  border-radius: 1rem; /* rounded-xl */
  background-color: #f83838ff; /* bg-sky-400 */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.375rem; /* small rounding */
  border: none;
  width: 95%;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  height: 150px;
  width: 95%;
  border-radius: 0.25rem;
  border: none;
  font-size: 1rem;
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 80px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: ${({ disabled }) => (disabled ? "#800062ff" : "#d81d1dff")};
  color: white;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ffc4f1ff" : "#ffa5deff")};
  }
`;

const HelperText = styled.div`
  font-size: 0.85rem;
  color: #fcf8fbff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;


export default function NewPostForm({
  append,
}: {
  append: (post: UrlProps) => void;
}) {
  const [alias, setAlias] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const newPost = await createNewAlias(alias, url);
      append(newPost);
      setAlias("");
      setUrl("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        placeholder="Alias"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
      />

      <TextArea
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <HelperText>Enter an alias and a URL to shorten.</HelperText>

      <ButtonWrapper>
        <SubmitButton type="submit" disabled={alias === "" || url === ""}>
          Create
        </SubmitButton>
      </ButtonWrapper>
    </FormWrapper>
  );
}
