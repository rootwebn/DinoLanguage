import axios from 'axios';
export const fetchResponseTranslation = async (data: string[]) => {
  const configStorage = JSON.parse(
    localStorage.getItem('ConfigSaveStorage') || '{}',
  );
  const targetLanguage = configStorage?.state?.targetLanguage;
  const response = await axios.post('http://localhost:5000/translate', {
    q: data,
    source: 'en',
    target: targetLanguage,
    format: 'text',
    api_key: '',
  });
  return response.data;
};
