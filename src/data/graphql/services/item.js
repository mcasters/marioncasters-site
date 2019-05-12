import ITEM_CONSTANTS from '../../../constants/itemConstants';
import { Drawing, Painting, Sculpture } from '../../models';

export const getItemByName = async (title, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.findOne({
      where: { title },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.findOne({
      where: { title },
    });
  return Sculpture.findOne({
    where: { title },
  });
};

export const getItemById = async (id, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.findOne({
      where: { id },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.findOne({
      where: { id },
    });
  return Sculpture.findOne({
    where: { id },
  });
};

export const addItemInBdd = async (data, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING) return Painting.create(data);
  if (type === ITEM_CONSTANTS.TYPE.DRAWING) return Drawing.create(data);
  return Sculpture.create(data);
};

export const updateItemInBdd = async (id, data, type) => {
  let updatedItem;
  if (type === ITEM_CONSTANTS.TYPE.PAINTING) {
    await Painting.update(
      {
        id,
        ...data,
      },
      { where: { id } },
    );
    updatedItem = await Painting.findOne({
      where: { id },
    });
    return updatedItem;
  }

  if (type === ITEM_CONSTANTS.TYPE.DRAWING) {
    await Drawing.update(
      {
        id,
        ...data,
      },
      { returning: true, where: { id } },
    );
    updatedItem = await Drawing.findOne({
      where: { id },
    });
    return updatedItem;
  }

  await Sculpture.update(
    {
      id,
      ...data,
    },
    { where: { id } },
  );
  updatedItem = await Sculpture.findOne({
    where: { id },
  });

  return updatedItem;
};

export const deleteItemInBdd = async (id, type) => {
  if (type === ITEM_CONSTANTS.TYPE.PAINTING)
    return Painting.destroy({
      where: { id },
    });
  if (type === ITEM_CONSTANTS.TYPE.DRAWING)
    return Drawing.destroy({
      where: { id },
    });
  return Sculpture.destroy({
    where: { id },
  });
};
