import { URL } from "../js/const";

export async function getValueByName(name) {
    try {
      const response = await fetch(URL + 'config/getValueByName/' + name);      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }      
      const jsonData = await response.json();
      return jsonData.server_status;
    } catch (error) {
      console.error(error);
    }
  };

export async function getAll() {
    try {
        const response = await fetch(URL + 'config/getAll');      
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }      
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error(error);
    }
};

  