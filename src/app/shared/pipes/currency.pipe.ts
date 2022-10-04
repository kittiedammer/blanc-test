import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number, currency: string): string {

    let curSymbol = "$";
    currency === "USD" ? null : curSymbol = "₽";
    
    return this.formatBalanceValue(value, decimalPlaces) + ` ${curSymbol}`;
  }

  private formatBalanceValue(value: number, decimalPlaces: number) {
    let strValue: string = value.toFixed(decimalPlaces).toString();
    let maskValue = strValue.split('.')[0].split('').reverse().map((el: string, idx: number) => {
      if((idx + 1) % 3 === 0) {
        return " " + el;
      }
      return el
    }).reverse().join('');
    return maskValue + "." + strValue.split('.')[1];
  }

}


