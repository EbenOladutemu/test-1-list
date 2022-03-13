export function setLists(lists) {
  localStorage.setItem('lists', JSON.stringify(lists));
}

export function getLists() {
  return localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : [];
}

export function setSortMethod(sortMethod) {
  localStorage.setItem('sortMethod', JSON.stringify(sortMethod));
}

export function getSortMethod() {
  return localStorage.getItem('sortMethod');
}
