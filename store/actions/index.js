import * as t from '../types';

export const setUrls = (urls) => {
  return {
    type: t.SET_URLS,
    payload: urls
  }
}

export const updateUrls = (url) => {
  return {
    type: t.UPDATE_URLS,
    payload: url
  }
}

