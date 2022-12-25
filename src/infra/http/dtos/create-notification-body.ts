import { IsNotEmpty } from 'class-validator';
import { IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  @Length(4, 254)
  category: string;

  @IsNotEmpty()
  content: string;
}
