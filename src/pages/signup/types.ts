export type CountryType = {
  code: number;
  name: string;
};

export type CountryListType = Array<CountryType>;

export interface IFormData {
  name: string;
  lastName: string;
  email: string;
  country: string;
}
