import React, { Component } from 'react';
import { initialState } from '.store/attractions.model';

export const searchReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH':
      return {
        const value = action.value;
        const filteredAttractions = state.attractions.filter(attraction => {attraction.includes(value)});
        return {
          const filteredID = filteredAttractions.map(attraction => {attraction.id})
        }
      }
    default:
      return state;
  }
}
