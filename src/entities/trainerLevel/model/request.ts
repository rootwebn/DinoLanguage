export const FetchResponse = async (text: string[]) => {
  const response = await fetch('http://localhost:5000/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: text,
      source: 'en',
      target: 'ru',
      format: 'text',
      api_key: '',
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};
