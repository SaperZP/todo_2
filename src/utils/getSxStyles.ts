import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';

type ProcessedStyles<T> = {
  [K in keyof T]: SystemStyleObject<Theme>;
};

export function getSxStyles<T extends Record<string, SystemStyleObject<Theme>>>(
  input: T
): ProcessedStyles<T> {
  const output: ProcessedStyles<T> = {} as ProcessedStyles<T>;

  for (const key in input) {
    if (Object.hasOwn(input, key)) {
      // Ensure that the value is an object (and not null) before adding it to the output
      if (typeof input[key] === 'object' && input[key] !== null) {
        output[key] = { ...input[key] };
      }
    }
  }

  return output;
}
