// translate.js

const axios = require('axios');

const authKey = 'YOUR_AUTH_KEY'; // Replace 'YOUR_AUTH_KEY' with your DeepL API key
const text = ['Hello, world!'];
const targetLang = 'DE';
const sourceLang = 'EN';
const glossaryId = 'YOUR_GLOSSARY_ID'; // Replace 'YOUR_GLOSSARY_ID' with your DeepL Glossary ID, if applicable

const requestBody = {
  text,
  target_lang: targetLang,
  source_lang: sourceLang,
  glossary_id: glossaryId
};

const headers = {
  'Authorization': `DeepL-Auth-Key ${authKey}`,
  'User-Agent': 'YourApp/1.2.3',
  'Content-Type': 'application/json'
};

axios.post('https://api.deepl.com/v2/translate', requestBody, { headers })
  .then(response => {
    console.log('Translated Text:', response.data.translations[0].text);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
