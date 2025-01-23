import { FormEvent, useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputField from "../../ui/customInput";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useMutation } from "@tanstack/react-query";

interface FormDataProps {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: async (formData: { email: string; password: string }) => {
      return await axios.post(
        "http://localhost:3001/auth/signin",
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
          backgroundColor: "background.paper",
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
          Sign in
        </Typography>

        <InputField
          label="Email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          startAdornment={<EmailIcon />}
        />
        <InputField
          label="Password"
          name="password"
          required
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
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Signing In..." : "Sign In"}
        </Button>
      </Box>
    </form>
  );
};

export default SignIn;
