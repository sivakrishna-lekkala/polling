const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const ENDPOINT = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&text=';

export const httpGet = (searchQuery) => {
  const FLICKR_API_ENDPOINT = `https://${searchQuery}.mockapi.io/api/v1/zones`;
  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      console.log("response");
      console.log(response);
      return response.json()
    })
    .then(json => {
      console.log("json");
      console.log(json);
      return json.map(({ areaId, description, name, sequence }) => ({ 
        id:areaId,
        title:description,
        name:name,
        sequence:sequence,  
      }));
    });
};
