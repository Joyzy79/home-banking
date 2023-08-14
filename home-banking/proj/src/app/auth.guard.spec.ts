import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation when user is logged in', () => {
    spyOn(guard['authService'], 'isLoggedIn').and.returnValue(true);

    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    expect(guard.canActivate(route, state)).toBe(true);
  });

  it('should block activation and redirect to login when user is not logged in', () => {
    spyOn(guard['authService'], 'isLoggedIn').and.returnValue(false);
    spyOn(guard['router'], 'createUrlTree').and.callThrough();

    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    const result = guard.canActivate(route, state);

    expect(result instanceof UrlTree).toBe(true);
    expect(guard['router'].createUrlTree).toHaveBeenCalledWith(['/login']);
  });
});
