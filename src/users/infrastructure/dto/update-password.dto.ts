import { UpdatePasswordUseCase } from '@/users/application/usecases/updatepassword.usecase';

export class UpdatePasswordDto
  implements Omit<UpdatePasswordUseCase.Input, 'id'>
{
  newPassword: string;
  oldPassword: string;
}
