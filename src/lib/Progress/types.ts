export interface Props {
  className?: string;
  getLabelValue?: (value: number, max: number) => string;
  label: string;
  max?: number;
  value: number | null;
}
