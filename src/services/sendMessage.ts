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
      "x-api-key": import.meta.env.VITE_APP_EMAIL_API_KEY,
    },
  })
};
