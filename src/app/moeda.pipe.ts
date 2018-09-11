import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {

  transform(value: any, locale = 'pt-BR'): any {
    return new Intl.NumberFormat(locale).format(value); //Função Nativa do ES6 que cuida de formação das moedas para diversos formatos.
  }

}
