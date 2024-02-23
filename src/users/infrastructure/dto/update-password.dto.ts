import { UpdatePasswordUseCase } from '@/users/application/usecases/updatepassword.usecase';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePasswordDto
  implements Omit<UpdatePasswordUseCase.Input, 'id'>
{
  @ApiProperty({ description: 'Nova senha do usuário' })
  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @ApiProperty({ description: 'Senha atual do usuário' })
  @IsString()
  @IsNotEmpty()
  oldPassword: string;
}
