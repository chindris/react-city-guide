export const FILTERS_SET = 'FILTERS_SET';
export const FILTERS_REMOVE = 'FILTERS_REMOVE';

export const filtersSet = (filterId, filterKey, filterValue) => {
  return {
    type: FILTERS_SET,
    filterId,
    filterKey,
    filterValue,
  }
}

export const filtersRemove = (filterId, filterKey) => {
  return {
    type: FILTERS_REMOVE,
    filterId,
    filterKey,
  }
}