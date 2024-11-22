import { Component } from '@angular/core';

@Component({
  selector: 'classnstyle',
  templateUrl: './classnstyle.component.html',
  styleUrl: './classnstyle.component.scss'
})
export class ClassnstyleComponent {
  isActive:boolean = true;
  isAdmin:boolean = false;
  isPremiumUser  = true;
  isOnline = false;
  hasNotifications = true;
  isVerified = true;
  isNewUser  = false;
  isBanned = false;
  isInDarkMode = true;
  isOnSale = false;

  buttonDetails: { buttonName: string; className: string; associatedBoolean:string}[] = [
    { buttonName: 'Status', className: 'active', associatedBoolean: 'isActive' },
    { buttonName: 'Role', className: 'admin', associatedBoolean: 'isAdmin' },
    { buttonName: 'User Type', className: 'premium', associatedBoolean: 'isPremiumUser' },
    { buttonName: 'Online Status', className: 'online', associatedBoolean: 'isOnline' },
    { buttonName: 'Notifications', className: 'has-notifications', associatedBoolean: 'hasNotifications' },
    { buttonName: 'Verification', className: 'verified', associatedBoolean: 'isVerified' },
    { buttonName: 'User Type', className: 'new-user', associatedBoolean: 'isNewUser' },
    { buttonName: 'Ban Status', className: 'banned', associatedBoolean: 'isBanned' },
    { buttonName: 'Mode', className: 'dark-mode', associatedBoolean: 'isInDarkMode' },
    { buttonName: 'Sale Status', className: 'on-sale', associatedBoolean: 'isOnSale' },

  ];
  toggle(Bool:string ){
    console.log(typeof(Bool),"Bool",Bool,"Boolean");
    (this as any)[Bool] = !(this as any)[Bool];
  }
}

  
  