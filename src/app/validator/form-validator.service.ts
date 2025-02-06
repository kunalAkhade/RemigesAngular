import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  validateMobileNumber(number:string):boolean{

      if(number.length!=10){
        return false;
      }
      for(let i=0;i<number.length;i++){
        if(number.charAt(i)<'0' && number.charAt(i)>'9'){
            return false;
        }
      }
      return true;
  }

  validateUsername(name:string):boolean{
    if(name.length==0){
      return false;
    }
    for(let i=0;i<name.length;i++){
      if(!(name.charAt(i)>='A' && name.charAt(i)<='Z' || name.charAt(i)>='a' && name.charAt(i)<='z')){
          return false;
      }
    }
    return true;
  }

  validatePassword(password:string):boolean{
    return password.length!=0;
  }

  validateEmail(email:string):boolean{
    if(email.length==0){
      return false;
    }
    const extractedPart= email.split('@');
    if(extractedPart.length!=2 || extractedPart[0]==""){
      return false;
    }
    const actualPart="gmail.com"
    for(let i=0;i<extractedPart[1].length;i++){
      if(i>=actualPart.length || extractedPart[1].charAt(i)!=actualPart.charAt(i)){
        return false;
      }
    }
    return true;
  }

}
