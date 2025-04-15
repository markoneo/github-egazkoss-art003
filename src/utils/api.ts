export async function handleApiResponse(response: Response) {
  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    throw new Error('Failed to fetch data');
  }
  
  return response.json();
}