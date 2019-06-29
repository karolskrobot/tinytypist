import bingApiKey from './api-keys';

'use strict';
const ImageSearchAPIClient = require('azure-cognitiveservices-imagesearch');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;

async function getBingImageUrl(word: string, category: string) {
    
    const serviceKey = bingApiKey;    
    const searchTerm = `$${word}+transparent+background`;
   
    const credentials = new CognitiveServicesCredentials(serviceKey);
    const imageSearchApiClient = new ImageSearchAPIClient(credentials);

    const sendQuery = async () => {
        return await imageSearchApiClient.imagesOperations.search(searchTerm);
    };
    
    const url = sendQuery()
        .then(response => {            
            const max = 30
            const min = 0
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return response.value[randomNumber].contentUrl;
        })
        .catch(err => console.log(err));

    return url;
};

export {getBingImageUrl as default};
