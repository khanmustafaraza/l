const VITE_API_URL = import.meta.env.VITE_API_URL;

const apiPost = async (endpoint, payload) => {
  const res = await fetch(`${VITE_API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export { apiPost };
