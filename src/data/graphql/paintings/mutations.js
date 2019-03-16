/* eslint-disable spaced-comment */
import { Painting } from '../../models/index';
import { deleteImage } from '../../../imageServices';
import ITEM_CONSTANTS from '../../../constants/itemConstants';

export const types = [
  `
  input PaintingInput {
    title: String!
    date: String!
    technique: String!
    description: String
    height: Int!
    width: Int!
  }
  `,
];

export const mutations = [
  `
  addPainting (
    input: PaintingInput! 
  ): DatabasePainting
  
  deletePainting(
     id: ID!
  ): Boolean
`,
];

export const resolvers = {
  Mutation: {
    async addPainting(root, { input }) {
      const lookupPainting = await Painting.findOne({
        where: { title: input.title },
      });

      if (lookupPainting) {
        // eslint-disable-next-line no-throw-literal
        throw 'Peinture déjà existante';
      }

      return Painting.create({
        title: input.title,
        date: input.date,
        technique: input.technique,
        description: input.description,
        height: input.height,
        width: input.width,
      });
    },

    async deletePainting(root, { id }) {
      let paintingToDelete;

      await Painting.findOne({
        where: { id },
      }).then(
        painting => {
          paintingToDelete = painting;
          Painting.destroy({
            where: { id: painting.id },
          });
        },
        error => {
          throw new Error(`Echec lors de la suppression en BDD : ${error}`);
        },
      );

      try {
        deleteImage(paintingToDelete.title, ITEM_CONSTANTS.TYPE.PAINTING);
      } catch (err) {
        throw new Error(`Echec de la suppression du fichier image : ${err}`);
      }
      return true;
    },
  },
};
