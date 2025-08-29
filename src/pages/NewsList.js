// src/pages/NewsList.js
import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import API from "../api";
import { useNavigate } from "react-router-dom";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const res = await API.get("/news");
      setNews(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/news/${id}`);
      setNews(news.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Stack spacing={2} sx={{ maxWidth: 800, mx: "auto", mt: 5 }}>
      {news.map((item) => (
        <Card key={item._id}>
          <CardContent>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {item.content}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate(`/edit/${item._id}`)}
              sx={{ mr: 1 }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default NewsList;
