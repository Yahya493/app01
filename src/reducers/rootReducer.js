import ApiHelper from "../components/ApiHelper";

const initstate = {
    data: [],
    filters: {
        categoriesName: [],
        categories: []
    },
    searchQuery: ''
}

const rootreducer = (state = initstate, action) => {

    switch (action.type) {
        case 'init': {
            state = {
                ...state,
                data: action.data,
                filters: {
                    ...state.filters,
                    categoriesName: action.categories
                    , categories: action.categories
                }
            }
            break
        }
        case 'setCategories': {
            state = { ...state, filters: { ...state.filters, categories: action.categories } }
            break
        }
        case 'search': {
            state = { ...state, searchQuery: action.searchQuery }
            break
        }
    }

    return state;
};

export default rootreducer;