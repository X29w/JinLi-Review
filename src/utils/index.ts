import { ParseIntPipe } from '@nestjs/common';

//#region 检验Number类型
export const generateParseIntPipe = (name: string) => {
  return new ParseIntPipe({
    exceptionFactory() {
      throw new Error(`Validation failed (value: ${name} is not an integer)`);
    },
  });
};
//#endregion
