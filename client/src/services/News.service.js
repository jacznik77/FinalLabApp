import { BASE_URL } from "../Constants/constants";

const queryBuilder = (queryParams) => {
    const {amount, from, date} = queryParams || {};
    let queries = [];
    let urlQuery = "?";
    if(amount > 0 && from > -1)
        queries.push(`cantidad=${amount}&desde=${from}`);
    if(date)
        queries.push(`fecha=${date}`);
    queries.forEach(query => {
        urlQuery === "?" ?
            urlQuery = urlQuery.concat(query)
            :
            urlQuery = urlQuery.concat('&', query)
        return urlQuery;
    })
    return urlQuery;
}
export async function fetchNews(amount, from, query){
    const urlQuery = queryBuilder({amount, from, ...query});
    const response = await fetch(`${BASE_URL}${urlQuery}`);
    const data = await response.json();
    return data.noticias;
}

export async function fetchNewsTotal(query){
    const urlQuery = queryBuilder(query);
    const response = await fetch(`${BASE_URL}/total${urlQuery}`);
    const data = await response.json();
    return data.cantidad;
}

export async function saveNews(data){
    const response = await fetch(`${BASE_URL}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    });
    const uploadedNews = await response.json();
    return uploadedNews.noticiaNueva;
}