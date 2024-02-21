import { instanceToPlain } from 'class-transformer';
import { UserPresenter } from '../../user.presenter';

describe('UserPresenter unit tests', () => {
  const createdAt = new Date();
  const props = {
    id: 'b3e0e053-c852-4113-8a0c-b74a57f40f64',
    name: 'test name',
    email: 'a@a.com',
    password: '1234',
    createdAt,
  };
  let sut: UserPresenter;

  beforeEach(() => {
    sut = new UserPresenter(props);
  });

  describe('constructor', () => {
    it('should set values', () => {
      expect(sut.id).toEqual(props.id);
      expect(sut.name).toEqual(props.name);
      expect(sut.email).toEqual(props.email);
      expect(sut.createdAt).toEqual(props.createdAt);
    });
  });

  it('should presenter data', () => {
    const output = instanceToPlain(sut);
    expect(output).toStrictEqual({
      id: 'b3e0e053-c852-4113-8a0c-b74a57f40f64',
      name: 'test name',
      email: 'a@a.com',
      createdAt: createdAt.toISOString(),
    });
  });
});
