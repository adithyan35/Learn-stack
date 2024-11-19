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
    { buttonName: 'Status', className: 'admin', associatedBoolean: 'isActive' },
    { buttonName: 'Role', className: 'admin', associatedBoolean: 'isAdmin' },
    { buttonName: 'User Type', className: 'admin', associatedBoolean: 'isPremiumUser' },
    { buttonName: 'Online Status', className: 'admin', associatedBoolean: 'isOnline' },
    { buttonName: 'Notifications', className: 'admin', associatedBoolean: 'hasNotifications' },
    { buttonName: 'Verification', className: 'admin', associatedBoolean: 'isVerified' },
    { buttonName: 'User Type', className: 'admin', associatedBoolean: 'isNewUser' },
    { buttonName: 'Ban Status', className: 'admin', associatedBoolean: 'isBanned' },
    { buttonName: 'Mode', className: 'admin', associatedBoolean: 'isInDarkMode' },
    { buttonName: 'Sale Status', className: 'admin', associatedBoolean: 'isOnSale' },

  ];
  toggle(Bool:string ){
    console.log(typeof(Bool),"Bool",Bool,"Boolean");
    (this as any)[Bool] = !(this as any)[Bool];
  }
}

  
  