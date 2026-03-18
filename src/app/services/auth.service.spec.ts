import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully with valid credentials', () => {
    const result = service.login('admin', 'password123');
    expect(result).toBe(true);
  });

  it('should fail login with invalid credentials', () => {
    const result = service.login('wrong', 'wrong');
    expect(result).toBe(false);
  });

  it('should set token in localStorage on successful login', () => {
    service.login('admin', 'password123');
    expect(localStorage.getItem('token')).toBe('fake-jwt-token');
  });

  it('should return isLoggedIn true after login', () => {
    service.login('admin', 'password123');
    expect(service.isLoggedIn()).toBe(true);
  });

  it('should return current user after login', () => {
    service.login('admin', 'password123');
    expect(service.getCurrentUser()).toBe('admin');
  });

  it('should logout and clear token', () => {
    service.login('admin', 'password123');
    service.logout();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should return isLoggedIn false after logout', () => {
    service.login('admin', 'password123');
    service.logout();
    expect(service.isLoggedIn()).toBe(false);
  });

  it('should return null for current user after logout', () => {
    service.login('admin', 'password123');
    service.logout();
    expect(service.getCurrentUser()).toBeNull();
  });
});
