import { Auth } from "@aws-amplify/auth";
import { handleSignUp } from './utils';

jest.mock('@aws-amplify/auth', () => ({
  Auth: {
    signUp: jest.fn((formData) => {
      return Promise.resolve({
        formData,
        userConfirmed: true,
      });
    }),
  },
}));

describe('handleSignUp function', () => {
  beforeEach(() => {
    Auth.signUp.mockClear();
  });

  it('should call Auth.signUp with correct arguments', async () => {
    const formData = {
      username: 'testuser',
      password: 'testpassword',
      attributes: {},
    };
    const favoriteSportRef = { current: { value: 'football' } };

    await handleSignUp(formData, favoriteSportRef);

    expect(Auth.signUp).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword',
      attributes: {
        'custom:favorite_sport': 'FOOTBALL',
      },
      autoSignIn: {
        enabled: true,
      },
    });
  });

  it('should return a Promise from Auth.signUp', async () => {
    Auth.signUp.mockResolvedValueOnce('signup-result');
    const formData = {
      username: 'testuser',
      password: 'testpassword',
      attributes: {},
    };
    const favoriteSportRef = { current: { value: 'football' } };

    const result = await handleSignUp(formData, favoriteSportRef);

    expect(result).toBe('signup-result');
  });
});
