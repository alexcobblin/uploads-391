"use client";
import createNewAlias from "@/app/lib/createNewAlias";
import { UrlProps } from "@/types";
import { Textarea } from "@mui/joy";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";

export default function NewPostForm({
    append,
}: {
    append: (post: UrlProps) => void;
}) {
    const [alias, setAlias] = useState("");
    const [url, setUrl] = useState("");

    return (
        <form
            className="w-96 rounded-xl p-4 bg-sky-400"
            onSubmit={async (event) => {
                event.preventDefault();
                createNewAlias(alias, url)
                    .then((newPost) => append(newPost))
                    .catch((err) => console.error(err));
            }}
        >
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                label="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />

            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderRadius: 0,
                }}
                variant="soft"
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <FormHelperText>Enter an alias and a URL to shorten.</FormHelperText>

            <div className="w-full flex justify-center">
                <Button
                    sx={{ width: "80px" }}
                    variant="contained"
                    type="submit"
                    disabled={alias === "" || url === ""}
                >
                    Create
                </Button>
            </div>
        </form>
    );
}
