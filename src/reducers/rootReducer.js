import ApiHelper from "../components/ApiHelper";

const initstate = {
    data: [],
    filters: {
        categories: []
    },
    searchQuery: ''
}

const rootreducer = (state = initstate, action) => {

    switch (action.type) {
        case 'init': {
            const api = new ApiHelper()
            api.getData().then(data => {
                state.data = data
                let catList = data.map(val => val.category)
                catList = catList.filter((value, index, self) => {
                    return self.indexOf(value) === index;
                })
                catList = ["All", ...catList.sort()]
                state.filters.categories = catList
            })
            break
        }
        case 'filter': {
            state.filters = action.filters
            // console.log("rootReducer:" +state.filters.categories)
            break
        }
        case 'search': {
            state.searchQuery = action.searchQuery
            break
        }
    }

    return state;
};

export default rootreducer;