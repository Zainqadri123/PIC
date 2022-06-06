import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import axios from "axios";

const UserRating = () => {
  const [value, setValue] = useState([]);
  const [feedback, setfeedback] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/rating", {
        value: value,
        feedback: feedback,
        pest_class:localStorage.getItem('current_class'),
        email:localStorage.getItem('email')

      })
      .then((res) => console.log(res))
      .catch((err) => console.warn(err));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend"></Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Box component="form">
          <FormControl style={{ width: "600px", height: "300px" }}>
            <TextField
              id="outlined-multiline-static"
              label="Feedback"
              multiline
              rows={10}
              value={feedback}
              onChange={(e) => setfeedback(e.target.value)}
            />
          </FormControl>
        </Box>
        <button
          onClick={handleSubmit}
          type="submit"
          style={{
            backgroundColor: "#04AA6D",
            border: "none",
            borderRadius: "50px",
            color: "white",
            padding: "16px 32px",
            textDecoration: "none",
            margin: "4px 2px",
            cursor: "pointer",
          }}
        >
          submit
        </button>
      </div>
    </>
  );
};

export default UserRating;
