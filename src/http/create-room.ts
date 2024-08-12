export interface CreateRoomRequest {
  theme: string;
}

export async function createRoom({ theme }: CreateRoomRequest) {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theme }),
  });

  const data = (await response.json()) as { id: string };

  return {
    roomId: data.id,
  };
}
