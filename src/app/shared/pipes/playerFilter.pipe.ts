import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../models/player';

@Pipe({
  name: 'PlayerFilter',
})
export class PlayerFilterPipe implements PipeTransform {
  transform(
    arr: Array<Iplayer>,
    searchVal: string | number,
    selectedfield: string
  ): Array<Iplayer> {
    if (!searchVal) {
      return arr;
    }
    if (!arr) {
      return [];
    }

    let filteredArr = arr.filter((p) => {
      if (typeof searchVal === 'string') {
        return Object(p)[selectedfield].toString().toLowerCase().includes(searchVal.toLowerCase());
      }
    });
    return filteredArr;
  }
}
