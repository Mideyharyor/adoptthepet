export const getPets = async (type='', query='') => {
    //Base Url
    let requestUrl = "http://localhost:8000/animals";
    //Add search params if they exists
    const params = new URLSearchParams();

    if (type) params.append('type', type);
    if (query) params.append('name', query);

    if (params.toString()){
        requestUrl += `?${params.toString()}`;
    }

    const response = await fetch(requestUrl);
    const jsonResponse = await response.json();
    return jsonResponse;
}