import { getDetails } from './lib/search.js';

export function search(searchQuery: string, config = { retries: 5, delay: 1000 }) {
  return getDetails(searchQuery, config);
}
