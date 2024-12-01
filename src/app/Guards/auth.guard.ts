import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const UserLocal = localStorage.getItem('user')
  const toaster = inject(ToastrService)
  if(UserLocal){
    return true;
  }
  else{
    toaster.error("please Login")
    return false;
  }
};
