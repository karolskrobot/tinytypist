import bingApiKey from './api-keys';

'use strict';
const ImageSearchAPIClient = require('azure-cognitiveservices-imagesearch');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;

async function getBingImageUrl(word: string, category: string) {
    
    let serviceKey = bingApiKey;    
    let searchTerm = `${category}+${word}+drawing+for+children`;
   
    let credentials = new CognitiveServicesCredentials(serviceKey);
    let imageSearchApiClient = new ImageSearchAPIClient(credentials);

    const sendQuery = async () => {
        return await imageSearchApiClient.imagesOperations.search(searchTerm);
    };
    
    const url = sendQuery()
        .then(response => {
            debugger
            const max = 50
            const min = 0
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return response.value[randomNumber].contentUrl;
        })
        .catch(err => console.log(err));

    return url;
};

export {getBingImageUrl as default};
