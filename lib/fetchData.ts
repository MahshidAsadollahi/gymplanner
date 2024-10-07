interface RequestOptions {
    method: string;
    headers: {
      [key: string]: string;
    };
  }

  export const exerciseOptions: RequestOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '5fcbcb1031msh97a5144f8f92dabp18d187jsnc1faecb48c6e',
    },
  };
  
export const youtubeOptions: RequestOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '5fcbcb1031msh97a5144f8f92dabp18d187jsnc1faecb48c6e',
    },
  };



  export const fetchData = async (url: string, options: RequestOptions) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };


  

 