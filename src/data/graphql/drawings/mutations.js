/* eslint-disable spaced-comment */
import { Drawing } from '../../models/index';
import { deleteImage } from '../../../imageServices';
import ITEM_CONSTANTS from '../../../constants/itemConstants';

export const types = [
  `
  input DrawingInput {
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
  addDrawing (
    input: DrawingInput!
  ): DatabaseDrawing
  
  deleteDrawing(
     id: ID!
  ): Boolean
`,
];

export const resolvers = {
  Mutation: {
    async addDrawing(root, { input }) {
      const lookupDrawing = await Drawing.findOne({
        where: { title: input.title },
      });

      if (lookupDrawing) {
        // eslint-disable-next-line no-throw-literal
        throw 'Drawing already exists!';
      }

      // Create new user with profile in database
      return Drawing.create({
        title: input.title,
        date: input.date,
        technique: input.technique,
        description: input.description,
        height: input.height,
        width: input.width,
      });
    },

    async deleteDrawing(root, { id }) {
      let drawingToDelete;
      await Drawing.findOne({
        where: { id },
      }).then(
        drawing => {
          drawingToDelete = drawing;
          Drawing.destroy({
            where: { id: drawing.id },
          });
        },
        error => {
          throw new Error(`Echec lors de la suppression en BDD : ${error}`);
        },
      );

      try {
        deleteImage(drawingToDelete.title, ITEM_CONSTANTS.TYPE.DRAWING);
      } catch (err) {
        throw new Error(`Echec de la suppression du fichier image : ${err}`);
      }
      return true;
    },
  },
};
