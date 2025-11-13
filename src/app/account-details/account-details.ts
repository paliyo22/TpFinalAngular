import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AccountDetailsService } from './account-details-managment';

@Component({
  selector: 'app-account-details',
  imports: [],
  templateUrl: './account-details.html',
  styleUrl: './account-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AccountDetails {
  protected readonly accountSignal = inject(AccountDetailsService);

}
