import { Sculpture } from '../../models/index';
import { deleteImage } from '../../../imageServices';
import ITEM_CONSTANTS from '../../../constants/itemConstants';

export const types = [
  `
  input SculptureInput {
    title: String!
    date: String!
    technique: String!
    description: String
    length: Int!
    height: Int!
    width: Int!
  }
  `,
];

export const mutations = [
  `
  addSculpture (
    input: SculptureInput!
  ): DatabaseSculpture
  
  deleteSculpture(
     id: ID!
  ): Boolean
`,
];

export const resolvers = {
  Mutation: {
    async addSculpture(root, { input }) {
      const lookupSculpture = await Sculpture.findOne({
        where: { title: input.title },
      });

      if (lookupSculpture) {
        // eslint-disable-next-line no-throw-literal
        throw 'Sculpture already exists!';
      }

      // Create new user with profile in database
      return Sculpture.create({
        title: input.title,
        date: input.date,
        technique: input.technique,
        description: input.description,
        length: input.length,
        height: input.height,
        width: input.width,
      });
    },

    async deleteSculpture(root, { id }) {
      let sculptureToDelete;
      await Sculpture.findOne({
        where: { id },
      }).then(
        scultpure => {
          sculptureToDelete = scultpure;
          Sculpture.destroy({
            where: { id: scultpure.id },
          });
        },
        error => {
          throw new Error(`Echec lors de la suppression en BDD : ${error}`);
        },
      );

      try {
        deleteImage(sculptureToDelete.title, ITEM_CONSTANTS.TYPE.SCULPTURE);
      } catch (err) {
        throw new Error(`Echec de la suppression du fichier image : ${err}`);
      }
      return true;
    },
  },
};
