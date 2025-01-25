import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputField from "../../ui/customInput";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    patronimic: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: async (formData: { email: string; password: string }) => {
      return await axios.post(
        "http://localhost:3001/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    },
    onSuccess: (response) => {
      console.log("Login successful:", response.data);
      alert("You have successfully signed in!");
    },
    onError: (error: any) => {
      console.error("Login failed:", error.response?.data || error.message);
      alert(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: "text.primary",
          }}
        >
          Create Your Account
        </Typography>

        <InputField
          label="Name"
          name="name"
          required
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Surname"
          name="surname"
          required
          type="text"
          value={formData.surname}
          onChange={handleChange}
        />
        <InputField
          label="Patronimic"
          name="patronimic"
          type="text"
          required
          value={formData.patronimic}
          onChange={handleChange}
        />
        <InputField
          label="Email*"
          name="email"
          required
          type="email"
          value={formData.email}
          onChange={handleChange}
          startAdornment={<EmailIcon />}
        />
        <InputField
          label="Password*"
          required
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          startAdornment={<LockIcon />}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            width: 350,
            marginTop: 2,
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
        >
          Sign Up
        </Button>
      </Box>
    </form>
  );
};

export default SignUp;
