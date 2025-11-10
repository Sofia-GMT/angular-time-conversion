import { Country } from './country.model';

describe('Country', () => {
  it('should create an instance', () => {
    expect(new Country('Test Country', '2023-01-01', 'TC', '12:00')).toBeTruthy();
  });
});
