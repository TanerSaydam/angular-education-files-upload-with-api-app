import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "";
  price: number = 0;

  image:any;
  files: any;

  constructor(
    private _http: HttpClient
  ){}

  setImage(e:any){
    var reader = new FileReader();
  this.files = e.target.files;
  reader.readAsDataURL(e.target.files[0]); // read file as data url

  reader.onload = (event) => { // called once readAsDataURL is completed
    this.image = event.target.result;
  }
  }

  addProduct(){
    let formData = new FormData();
    formData.append("name", this.name);
    formData.append("price", this.price.toString());

    for (let i = 0; i < this.files.length; i++) {
      const element = this.files[i];
      formData.append("files",element,element.name);
    }

    

    this._http.post("https://localhost:7056/api/Values", formData).subscribe(res=>{

    });
  }

}
