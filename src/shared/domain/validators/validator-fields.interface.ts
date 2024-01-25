export type FieldsErrors = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidated> {
  error: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
