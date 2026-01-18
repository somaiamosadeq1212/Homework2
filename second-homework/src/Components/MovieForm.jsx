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

        if (!category) {  // کاربر هنوز چیزی انتخاب نکرده
            return setError("Please select a category");
        }

        onAddMovie({ title: cleanTitle, category });

        setTitle("");
        setCategory(""); // reset to placeholder
    }

    return (
        <div>
            <div className="row">
                <TextInput
                    label={"title"}
                    value={title}
                    onChange={setTitle}
                    placeholder={"Enter movie title"}
                ></TextInput>
                <button className="btn primary" onClick={submit}>Add Movie</button>

                {error ? <p className="error">{error}</p> : null}
            </div>
            <div className="row">
                <SelectInput
                    label={"Category"}
                    value={category}
                    onChange={setCategory}
                    options={CATEGORIES}
                    placeholder='Select from list'
                ></SelectInput>
            </div>
        </div>
    )
}