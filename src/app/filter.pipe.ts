import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false 
})
//! pure: false >>>> (this may cause the performance issues because this will recalculate on every changes in data. So it is recommended to keep it default (true), but if you want the feature of recalculation of the data on every changes then you can make it false.)

export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '' || filterString === undefined) {
      return value;
    }
 
    const result = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        result.push(item);
      }
    }
    return result;
  }
}
