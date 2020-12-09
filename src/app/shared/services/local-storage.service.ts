import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItemAsJSON<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }
}
