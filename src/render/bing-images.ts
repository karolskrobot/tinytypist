import ImageSearchAPIClient from 'azure-cognitiveservices-imagesearch';
import { Images } from 'azure-cognitiveservices-imagesearch/lib/models';
import { CognitiveServicesCredentials } from 'ms-rest-azure';
import bingApiKey from '../api-keys';

async function getBingImageUrl(word: string, category = ''): Promise<string> {

    const serviceKey = bingApiKey;
    let searchTerm: string;

    if (category === '') {
        searchTerm = `${word}+transparent+background`;
    } else {
        searchTerm = `${word}+${category}+transparent+background`;
    }

    const credentials = new CognitiveServicesCredentials(serviceKey);
    const imageSearchApiClient = new ImageSearchAPIClient(credentials);

    const sendQuery = async (): Promise<Images> => imageSearchApiClient
        .imagesOperations.search(searchTerm);

    const url = sendQuery()
        .then((response): string => {
            const max = 30;
            const min = 0;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return response.value[randomNumber].contentUrl;
        });

    return url;
}

export { getBingImageUrl as default };
