import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../model/pizza';

/*
  Generated class for the PizzaserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Pizzaservice {

  private readonly url= "http://kim.jcatania.io:3000/pizza/";

  constructor(public http: HttpClient) {
    console.log('Hello PizzaserviceProvider Provider');
  }
  ditMoiBonjour(id:number){
    console.log("ditMoiBonjour('"+ id + "')");
  }
  /*cette fonction permet de récuperer les pizzas qui sont sur le webservice*/
  get(){
    let rt: Array<Pizza>=new Array<Pizza>();
    return new Promise<Array<Pizza>>(resolve => {
      this.http.get(this.url).subscribe((data:Array<any>) => {
        for(let i=0; i<data.length;i++){
          rt.push(new Pizza(data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price']))
        }
        resolve(rt);
        console.log(data);
    });
    });

  }
  /*fonction qui va chercher les pizzas par id*/
  getById(id:number){
    let trouverParId: Pizza;
    return new Promise<Pizza>(resolve => {
    this.http.get(this.url + id).subscribe((data:any) => {
      trouverParId=new Pizza (data['id'],data['name'],data['desc'],data['picture'],data['price']);
      resolve(trouverParId);
    });
  });
  }
/*fonction permettant d'ajouter une pizza au webservice*/
ajouter(pizza: Pizza){
  return new Promise<Pizza>(resolve => {
    this.http.post(this.url, pizza).subscribe((data:any)=>{
      resolve();
    });
  });
}
/*fonction qui permet de supprimer une pizza du webservice*/
supprimer(id:number){
  return new Promise<Pizza>(resolve =>{
    this.http.delete(this.url + id).subscribe((data: any)=> {
      resolve();
    });
  });
}
/*fonction qui permet de modifier une pizza du webservice*/
modifier(pizza: Pizza){
  return new Promise<Pizza>(resolve => {
    this.http.patch(this.url + pizza.id, pizza).subscribe((data: any)=>{
      resolve();
    });
  });
}

}
