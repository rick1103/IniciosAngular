import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(valor: string): string {
    if(valor.toString().length > 150)
    {
      valor = valor.substr(0,150)
    }

    valor += ' Continuara...'

    return valor;
  }

}
