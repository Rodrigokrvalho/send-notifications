import { Content } from './content';

describe('Notification content', () => {
  it('should to be able to create a notification content', () => {
    const content = new Content('Você tem uma nova solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not to be able to create a notification with less than 5 characters', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('should not to be able to create a notification with more than 240 characters', () => {
    expect(() => new Content('V'.repeat(241))).toThrow();
  });
});
