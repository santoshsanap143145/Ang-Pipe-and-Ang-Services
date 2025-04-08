import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number = 50) {
    // if(!limit){
    //     limit = 50
    // }
    // return value.substring(0, 50) + '...'
    return `${value.substring(0, limit)}...`
  }
}
