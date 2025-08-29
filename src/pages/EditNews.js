// src/pages/EditNews.js
import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await API.get(`/news/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await API.put(`/news/${id}`, { title, content });
      alert("News updated!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 10, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Edit News
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
          onClick={handleUpdate}
          sx={{ mt: 2 }}
        >
          Update
        </Button>
      </CardContent>
    </Card>
  );
};

export default EditNews;
