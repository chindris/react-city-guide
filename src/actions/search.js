export const SEARCH_TEXT = 'SEARCH_TEXT';


export const searchText = (value) => {
  return {
    type: SEARCH_TEXT,
    value,
  }
}
