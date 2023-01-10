import { VacancyDescriptionProps } from "../../VacancyDescription";

export interface CompanyDescriptionProps {
  companyName: string;
  companyHr: string;
  publicationDate: string;
}

export interface VacancyCardProps
  extends VacancyDescriptionProps,
    CompanyDescriptionProps {}
