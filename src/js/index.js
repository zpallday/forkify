import Search from './models/Search'
import * as searchView from './views/seachView'
import { elements, renderLoader, clearLoader } from './views/base'
const state = {}

const controlSearch = async () => {
    const query = searchView.getInput();
   console.log(query)
    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes)

        await state.search.getResults();

        clearLoader();
        searchView.renderResults(state.search.result)
    }
  
}

    elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
})

