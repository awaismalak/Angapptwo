import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class fetchdataService {
public data = [];
  constructor() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data) => this.data.push(data))
    .catch(err => console.log(err));
   }
  }

