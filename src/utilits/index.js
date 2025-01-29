export const getLocalStorageData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const addToStorage = (key, item) => {
  const existingData = getLocalStorageData(key);
  if (existingData.find((data) => data.product_id === item.product_id)) {
    return false;
  }
  existingData.push(item);
  setLocalStorageData(key, existingData);
  // Dispatch event to update navbar count
  window.dispatchEvent(new Event("storageUpdate"));
  return true;
};
