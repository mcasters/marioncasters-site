import { User } from '../../models';

const getAuthenticatedUser = async req => {
  if (!req.session.userId) return false;

  // eslint-disable-next-line no-return-await
  return await User.findOne({
    where: { id: req.session.userId },
  });
};

export default getAuthenticatedUser;
