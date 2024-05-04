// utils/api.js
const fetchData = async (limit, offset) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const body = JSON.stringify({
      "limit": limit,
      "offset": offset
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };
  
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const data = await response.json();
      console.log("data")
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      return { jobs: [], totalCount: 0 };
    }
  }
  
  export default fetchData;
  