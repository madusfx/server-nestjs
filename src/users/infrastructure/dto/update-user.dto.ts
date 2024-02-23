import { UpdateUserUseCase } from '@/users/application/usecases/updateuser.usecase';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto implements Omit<UpdateUserUseCase.Input, 'id'> {
  @ApiProperty({ description: 'Nome novo do usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
