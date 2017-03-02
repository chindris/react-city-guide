import React, { Component } from 'react';

export function search(value) {
  return {
    type: 'SEARCH',
    value,
  }
}
