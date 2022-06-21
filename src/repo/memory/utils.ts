import { User } from '../../entity/User';

export const fillUsersInMemory = () => {
  const normalUser = new User(
    'testuser@test.com',
    '5 Years experience in Full Stack Development',
    { community: 8, talent: 8 },
    'admin@test.com'
  );

  const adminUser = new User(
    'admin@test.com',
    'Admin User',
    {
      community: 9,
      talent: 9,
    },
    'admin@test.com'
  );

  adminUser.makeAdmin();

  return [normalUser, adminUser];
};
