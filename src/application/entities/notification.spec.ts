import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should to be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você tem uma nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
