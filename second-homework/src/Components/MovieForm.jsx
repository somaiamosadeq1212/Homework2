import { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const CATEGORIES = ["Action", "Drama", "Comedy", "Other"];

export default function MovieForm({ onAddMovie }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");

    function submit() {
        setError("");
        const cleanTitle = title.trim();

        if (!cleanTitle) {
            return setError("Title is required");
        }

        if (!category) { 
            return setError("Please select a genre");
        }

        onAddMovie({ title: cleanTitle, category });

        setTitle("");
        setCategory(""); 
    }

    return (
        <div>
            <div className="row">
                <TextInput
                    value={title}
                    onChange={setTitle}
                    placeholder={"Enter movie title"}
                ></TextInput>
                <button className="btn primary" onClick={submit}>Add Movie</button>

                {error ? <p className="error">{error}</p> : null}
            </div>
            <div className="row">
                <SelectInput
                    label={"Genre:"} 
                    value={category}
                    onChange={setCategory}
                    options={CATEGORIES}
                    placeholder='Select Genre'
                ></SelectInput>
            </div>
        </div>
    )
}