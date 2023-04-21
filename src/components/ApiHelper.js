

export default class ApiHelper {
    api = 'https://fakestoreapi.com'
    
    getData = async () => {
        return fetch(this.api + '/products')
            .then(resp => resp.json())
            .then(json => {return json})
        // return new Promise((resolve, reject) => {
        //     // fetch data from API or other data source
        //     fetch(this.api + '/products')
        //       .then(response => response.json())
        //       .then(data => resolve(data))
        //       .catch(error => reject(error));
        //   });
    }
}
