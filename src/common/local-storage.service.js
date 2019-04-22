import { AsyncStorage, Platform } from 'react-native'

import Base64 from '../common/base64.service';

class LocalStorageService {
  storage = {
    user: {},
    auth: {},
    refreshToken: {}
  };
  isStorage = false;

  create = () => {
    try {
      AsyncStorage.setItem('auth', JSON.stringify(this.storage.auth));
      AsyncStorage.setItem('user', JSON.stringify(this.storage.user));
      AsyncStorage.setItem('refreshToken', JSON.stringify(this.storage.refreshToken));
      this.isStorage = true;
      return true;
    } catch (error) {
      console.log('Create Async Storage Error:', error);
    }
  }

  async setValue(key, value) {
    const objectKey = this.storageForKey(key);
    try {
      let val = await AsyncStorage.getItem(objectKey);
      val = JSON.parse(val);
      if (typeof (value) !== 'boolean' && key !== 'userImage' &&
        typeof (value) !== 'number') {
        val[key] = Base64.btoa(value || '');
      } else if (typeof (value) !== 'boolean' && key === 'userImage') {
        val[key] = value;
      } else {
        val[key] = value;
      }
      return await AsyncStorage.setItem(objectKey, JSON.stringify(val));
    }
    catch (e) {
      console.log('Set Async Storage Item Error:', e);
    }
  }

  async getValue(key) {
    const objectKey = this.storageForKey(key);
    try {
      let value = await AsyncStorage.getItem(objectKey);
      let object = JSON.parse(value);

      if (object === null) {
        return false;
      }
      let objectValue = object[key];

      if (object && objectValue) {
        if (typeof (objectValue) !== 'boolean' && key !== 'userImage' &&
          typeof (objectValue) !== 'number') {
          return Base64.atob(objectValue);
        } else if (typeof (objectValue) !== 'boolean' && key === 'userImage') {
          return objectValue;
        } else {
          return objectValue;
        }
      } else {
        return false;
      }
    }
    catch (e) {
      console.log('Get Async Storage Item Error:', e);
    }
  }

  getUserData = async () => {
    const objectKey = this.storageForKey('user');
    try {
      let value = await AsyncStorage.getItem(objectKey);
      let object = JSON.parse(value);
      if (object === null) {
        return false;
      }
      let cloneObject = {};
      for (let k in object) {
        if (object.hasOwnProperty(k)) {
          if (typeof (object[k]) !== 'boolean' && k !== 'userImage' &&
            typeof (object[k]) !== 'number') {
            cloneObject[k] = Base64.atob(object[k] || '');
          } else if (k === 'userImage') {
            cloneObject[k] = object[k] || '';
          }
        }
      }
      return cloneObject;
    }
    catch (e) {
      console.log('Get Async Storage Item Error:', e);
      return false;
    }
  }

  mergeValue = async (key, value) => {
    const objectKey = this.storageForKey(key);
    if (typeof value === 'boolean' || typeof value === 'string' || typeof value === 'number') {
      return this.setValue(key, value);
    }
    try {
      if (Array.isArray(value)) {
        throw new TypeError('Provided "value" should not be type of "Array Object".');
      }
      let cloneValue = {};
      for (let k in value) {
        if (value.hasOwnProperty(k)) {
          if (typeof (value[k]) !== 'boolean' && k !== 'userImage' &&
            typeof (value[k]) !== 'number') {
            cloneValue[k] = Base64.btoa(value[k] || '');
          } else if (k === 'userImage') {
            cloneValue[k] = value[k] || '';
          }
        }
      }
      return await AsyncStorage.mergeItem(objectKey, JSON.stringify(cloneValue));
    } catch (e) {
      console.log('Merge Value Error: ', e);
      return false;
    }
  }

  async clearLocalStorage() {
    try {
      await AsyncStorage.clear();
      return true;
    }
    catch (e) {
      console.log('Clear Async Storage Error:', e);
    }
  }

  async remove(key) {
    const objectKey = this.storageForKey(key);
    try {
      let value = await AsyncStorage.getItem(objectKey);
      let object = JSON.parse(value);
      let objectValue = object[key];
      if (object && objectValue) {
        delete object[key];
        return true;
      } else {
        return false;
      }
    }
    catch (e) {
      console.log('Remove Async Storage Item Error:', e);
    }
  }

  isLocalStorage() {
    return this.isStorage;
  }

  storageForKey(key) {
    switch (key) {
      case 'auth':
        return 'auth';
      case 'accessToken':
        return 'auth';
      case 'refreshToken':
        return 'refreshToken';
      default:
        return 'user';
    }
  }
}
export default LocalStorageService;