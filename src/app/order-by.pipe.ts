import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field:string,ascending:boolean=true): any[]{
    if(!Array.isArray(array)||!field){
      return array;
    }

    const direction = ascending? 1:-1;

    array.sort((a,b) =>{
      if(a[field] < b[field]){
        return -1*direction;
      }

      if(a[field]>b[field]){
        return -1*direction;
      }
      return 0;
    });
    return array;
  }

}
