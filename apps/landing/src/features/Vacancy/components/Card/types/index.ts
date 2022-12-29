export interface CardProps extends ComponyDescriptionProps, ComponyInfoProps {
  id?: string;
  title: string;
}

export interface ComponyDescriptionProps {
  description: string;
}

export interface ComponyInfoProps {
  jobVariant: "Remote" | "Office" | "Remote or Office";
  companyType: "Outsource" | "Outstaff" | "Product" | "Startup";
}
