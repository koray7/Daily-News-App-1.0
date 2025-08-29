// src/pages/AddNews.js
import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import API from "../api";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = async () => {
    try {
      await API.post("/news", { title, content });
      alert("News added!");
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
      alert("Failed to add news");
    }
  };

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 10, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Add News
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Content"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAdd}
          sx={{ mt: 2 }}
        >
          Add
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddNews;
