export interface TodoRadioI {
  handleChange: (value: string) => void;
  map: { [key: string]: string };
  options: string[];
  title: string;
}
