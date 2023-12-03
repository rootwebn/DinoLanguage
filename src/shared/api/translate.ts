export const res = await fetch('http://localhost:5000/translate', {
  method: 'POST',
  body: JSON.stringify({
    q: 'fetch',
    source: 'en',
    target: 'uk',
    format: 'text',
    api_key: '',
  }),
  headers: { 'Content-Type': 'application/json' },
});

console.log(await res.json());
