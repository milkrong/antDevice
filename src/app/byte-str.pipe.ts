import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byteStr'
})
export class ByteStrPipe implements PipeTransform {

  transform(value: number): any {
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
      if (value == 0)
        return '0';

      if (isNaN(value) || !isFinite(value))
        return '-';

      // find power of 2^10
      let i = Math.floor(Math.log(value) / Math.log(1024));

      if (i == 0)
        return value.toFixed(2) + ' ' + sizes[0];
      else
        return (value / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
  }

}
