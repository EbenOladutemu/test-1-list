export const setLists = (lists: any[]): any => {
  localStorage.setItem('lists', JSON.stringify(lists));
};

export const getLists = (): any => {
  return JSON.parse(localStorage.getItem('lists') || '[]');
};

export const setSortMethod = (sortMethod: string): any => {
  localStorage.setItem('sortMethod', sortMethod);
};

export const getSortMethod = (): any => {
  return localStorage.getItem('sortMethod');
};
