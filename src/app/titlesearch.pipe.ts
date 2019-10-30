import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlesearch'
})
export class TitlesearchPipe implements PipeTransform {

  transform(value: any,searchByTitle): any {
    return value.filter(search=>{
      if(!searchByTitle){
    return value;
      }
   const titleBy=search.title.toLowerCase().startsWith(searchByTitle.toLowerCase())
   return titleBy;
    })
  }

}
