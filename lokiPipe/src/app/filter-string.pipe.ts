import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {
  transform(lists: any, ...args: unknown[]): unknown {
    // console.log(args[0]);
    if (!lists.length || args[0] === '') return lists;

    const resultAry = [];
    for (const item of lists) {
      if (item.status === args[0]) resultAry.push(item);
    }
    return resultAry;
  }
}
