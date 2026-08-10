import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskAccount',
  standalone: true
})
export class MaskAccountPipe implements PipeTransform {

  transform(accountNumber: string): string {

    if (!accountNumber) {
      return '';
    }

    if (accountNumber.length <= 4) {
      return accountNumber;
    }

    const lastFour =
      accountNumber.slice(-4);

    return 'XXXXXX' + lastFour;
  }
}