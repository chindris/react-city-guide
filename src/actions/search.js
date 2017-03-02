import React, { Component } from 'react';

export const search(value) {
  return {
    type: 'SEARCH',
    value,
  }
}
