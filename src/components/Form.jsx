import { useState, useEffect } from "react";

export default function Form(props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({ searchTerm: "" });

  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    // Prevent page from refreshing on form submission
    e.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.movieSearch(formData.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
