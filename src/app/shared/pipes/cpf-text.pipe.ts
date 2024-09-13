import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfText',
})
export class CpfTextPipe implements PipeTransform {
  transform(value: string) {
    var re = /^([\d]{3})\.?([\d]{3})\.?([\d]{3})\-?([\d]{2})/;
    return value.replace(re, '$1.$2.$3-$4');
  }
}
