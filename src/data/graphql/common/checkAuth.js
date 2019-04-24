import { User } from '../../models';

const getAuthenticatedUser = async req => {
  if (!req.session.userId) throw new Error("Erreur d'authentification");

  const dbUser = await User.findOne({
    where: { id: req.session.userId },
  });
  if (!dbUser) throw new Error('Utilisateur introuvable en Bdd');
  return dbUser;
};

export default getAuthenticatedUser;
