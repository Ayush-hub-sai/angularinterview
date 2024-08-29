import { CanActivateFn } from '@angular/router';

// command for cli
// ng generate guard guard/auth --implements CanActivate
export const authGuard: CanActivateFn = (route, state) => {
  /**
   * 1.getloalstoragevalue which you have saved at the time of login 
   * 2.then compare like localstoragevalue!=null->true else return false and navigate to login page
  */


  return true;
};
