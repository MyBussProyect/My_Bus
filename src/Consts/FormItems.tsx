import { AccountType } from "../Components/MontesWork/Main/FormSections/AccountType";
import { ContactInfo } from "../Components/MontesWork/Main/FormSections/ContactInfo";
import { Password } from "../Components/MontesWork/Main/FormSections/Password";
import { Pic } from "../Components/MontesWork/Main/FormSections/Pic";
import { RequiredInfo } from "../Components/MontesWork/Main/FormSections/RequiredInfo";

export const Sections = [
  <AccountType />,
  <RequiredInfo />,
  <ContactInfo />,
  <Pic />,
  <Password />,
];
export const SectionTitle = [
  'Tipo de cuenta',
  'Datos requeridos',
  'Contacto',
  'Sube tu foto',
];
