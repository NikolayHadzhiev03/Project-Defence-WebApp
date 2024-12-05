import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'relativeTime',
  standalone : true,
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: Date | string | number): string {
    return formatDistanceToNow(new Date(value), { addSuffix: true });
  }
}
