

export default class ApiHelper {
    api = 'https://fakestoreapi.com'

    constructor() {
        if (!ApiHelper.instance) {
          ApiHelper.instance = this;
        }
        return ApiHelper.instance;
      }
    
    getData = async () => {
        return fetch(this.api + '/products')
            .then(resp => resp.json())
            .then(json => {return json})
    }

    getProductById = async (id) => {
        return fetch(this.api + '/products/' + id)
            .then(resp => resp.json())
            .then(json => {return json})
    }

    
}
