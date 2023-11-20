import React, { useEffect, useRef, useState } from 'react';

export type ValidationRules<T> = Record<keyof T, RegExp>;
export type ValidationResult<T> = Record<keyof T, boolean | 'empty'>;

const validator = <T extends Record<string, string>>(
  validate: T,
  rules: ValidationRules<T>
): ValidationResult<T> => {
  const result: ValidationResult<T> = {} as ValidationResult<T>;

  for (const key in validate) {
    if (Object.hasOwn(validate, key)) {
      const value = validate[key];
      const regex = rules[key];

      if (!value) {
        result[key] = 'empty';
        continue;
      }

      if (regex) {
        result[key] = regex.test(value);
      } else {
        // If no validation rule is provided, default to true
        result[key] = true;
      }
    }
  }

  return result;
};

const useValidate = <T extends Record<string, string>>(
  toValidate: T,
  validationRules: ValidationRules<T>,
  delay = 0.5
) => {
  const [fieldsValidationStatus, setFieldsValidationStatus] = useState<
    ValidationResult<T>
  >(() => validator(toValidate, validationRules));

  const timeout: React.MutableRefObject<NodeJS.Timeout | undefined> = useRef();

  const nothingToValidate = Object.values(toValidate).every(
    (value) => value.length === 0
  );

  const flush = () => {
    clearTimeout(timeout.current);
    const result = validator(toValidate, validationRules);
    setFieldsValidationStatus(result);

    return result;
  };

  useEffect(() => {
    if (!nothingToValidate) {
      timeout.current = setTimeout(() => {
        setFieldsValidationStatus(validator(toValidate, validationRules));
      }, delay * 1000);
    }

    return () => clearTimeout(timeout.current);
  }, [delay, nothingToValidate, toValidate, validationRules]);

  return { fieldsValidationStatus, flush };
};

export default useValidate;
