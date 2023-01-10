export interface VacancyDescriptionProps extends ComponyInfoProps {
  id?: string;
  title: string;
  description: string;
}

export interface CompanyDescriptionProps {
  companyName: string;
  companyHr: string;
  publicationDate: string;
}

export interface ComponyInfoProps {
  jobVariant: "Remote" | "Office" | "Remote or Office";
  companyType: "Outsource" | "Outstaff" | "Product" | "Startup";
}

export interface VacancyCardProps
  extends VacancyDescriptionProps,
    CompanyDescriptionProps {}
