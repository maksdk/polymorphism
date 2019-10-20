export default class {
   constructor(httpClient) {
     this.httpClient = httpClient;
     this.pathName = "http://localhost:8080/api/v2/cities/";
   }
 
   async get(cityName) {
     const result = await this.httpClient.get(`${this.pathName}${cityName}`);
     const { data } = result;
     return JSON.parse(data);
   }
 }


