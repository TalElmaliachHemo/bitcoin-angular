import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naturalType'
})
export class NaturalTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
