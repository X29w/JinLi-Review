import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyWordDto } from './create-key-word.dto';

export class UpdateKeyWordDto extends PartialType(CreateKeyWordDto) {}
