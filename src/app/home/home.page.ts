import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
weight ? : number;
hight ? : number;
result ? : number;
result_text : string="";

oncal(){
  // console.log("น้ำหนัก = " + this.weight);
  // console.log("ส่วนสูง = " + this.hight);
  if(this.hight == undefined|| this.weight == undefined){
alert ("กรุณากรอกข้อมูลให้ครบ")
return;

  }
  var hi = this.hight/100;
  this.result = this.weight / (hi*hi)
  // console.log("ผลลัพธ์ = " +this.result)

  if(this.result < 18.5){
    this.result_text = "อยู่ในเกณฑ์น้ำหนักน้อยหรือผอม";
  }else if(this.result >= 18.5 && this.result <= 22.90){
    this.result_text = "อยู่ในเกณฑ์ปกติ";
  }else if(this.result >= 23 && this.result <= 24.90){
    this.result_text = "น้ำหนักเกิน";
  }else if(this.result >= 25 && this.result <= 29.90){
    this.result_text = "โรคอ้วนระยะที่1";
  }else{
    this.result_text= "โรคอ้วนระยะที่2";
    }

  }

  }

