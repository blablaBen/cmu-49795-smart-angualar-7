import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreInformationService {

  isStore: boolean;
  storeId: string;
  storeName: string;
  constructor() { 
    let sessionInformation = JSON.parse(sessionStorage.getItem("storeInformation")) || {};
    this.isStore = sessionInformation.isStore || false;
    this.storeId = sessionInformation.storeId || "";
    this.storeName = sessionInformation.storeName || "";
  }

  setInformation(isStore: boolean, storeId: string, storeName: string) {
    this.isStore = true;
    this.storeId = storeId;
    this.storeName = storeName;
    sessionStorage.setItem("storeInformation", JSON.stringify({
      isStore: true,
      storeId: storeId,
      storeName: storeName
    }));
  }

}
