import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'summaryWord',
})
export class SummaryWordsPipe implements PipeTransform {
  transform(value: string, limit: number = 20) {
    
    return `${value.split(' ').slice(0, limit).join(' ')}...`;
  }
}