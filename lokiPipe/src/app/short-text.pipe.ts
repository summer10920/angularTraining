import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
  pure: false
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    // console.log("A");
    if (value.length > args[0]) return value.substring(0, args[0]) + '...';
    return value;
  }
}