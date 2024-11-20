// realizar peticion http
export const peticion = async ( valor ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YxoKlDRDxT3K0DviIvzAefr3t3JKkRQA&q=${valor}&limit=1`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
};