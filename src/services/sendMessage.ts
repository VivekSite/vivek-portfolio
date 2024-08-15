import toast from "react-hot-toast";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  return fetch(import.meta.env.VITE_APP_EMAIL_API, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      message,
    }),
    headers: {
      "Content-Type": "application/json",
      "api-key": import.meta.env.VITE_APP_EMAIL_API_KEY,
    },
  });
};

export const showSuccess = (message: string) => {
  toast.success(message, {
    position: "top-center",
    style: {
      background:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.37)",
      padding: "20px",
      color: "white",
    },
  });
};

export const showError = (message: string) => {
  toast.error(message, {
    position: "top-center",
    style: {
      background:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.37)",
      padding: "10px 30px",
      color: "white",
    },
  });
};
