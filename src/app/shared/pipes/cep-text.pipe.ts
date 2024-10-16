import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cepText',
})
export class CepTextPipe implements PipeTransform {
  transform(value: string) {
    if (value) {
      var re = /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/;
      return value.replace(re, '$1$2-$3');
    }
    return '';
  }
}
