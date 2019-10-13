import { Sequelize } from 'sequelize';

import ITEM_CONSTANTS from '../../../constants/itemConstants';
import { Drawing, Painting, Sculpture } from '../../models';

class ItemService {
  constructor(type) {
    this.properties = {};
    this.init(type);
  }

  init(type) {
    if (type === ITEM_CONSTANTS.TYPE.PAINTING) this.properties = Painting;
    else if (type === ITEM_CONSTANTS.TYPE.DRAWING) this.properties = Drawing;
    else if (type === ITEM_CONSTANTS.TYPE.SCULPTURE)
      this.properties = Sculpture;
    else throw new Error(`Type ${type} inexistant`);
  }

  get(name) {
    if (!this.has(name)) {
      throw new Error(`Property ${name} not found`);
    }
    return this.properties[name];
  }

  has(name) {
    return name in this.properties;
  }

  getByName = async title => {
    return this.properties.findOne({
      where: { title },
    });
  };

  getById = async id => {
    return this.properties.findOne({
      where: { id },
    });
  };

  getAllItems = async () => {
    return this.properties.findAll({
      order: Sequelize.col('date'),
    });
  };

  // O = one year
  // 1 = first semester
  // 2 = second semester
  getItemsByPart = async (year, half) => {
    let start;
    let end;

    if (half === 0) {
      start = new Date(year, 0, 1);
      end = new Date(year, 11, 31);
    } else if (half === 1) {
      start = new Date(year, 0, 1);
      end = new Date(year, 5, 31);
    } else {
      start = new Date(year, 6, 1);
      end = new Date(year, 11, 31);
    }

    return this.properties.findAll({
      where: {
        date: {
          gte: start,
          lte: end,
        },
      },
      order: Sequelize.col('date'),
    });
  };

  add = async data => {
    return this.properties.create(data);
  };

  update = async (id, data) => {
    await this.properties.update(
      {
        id,
        ...data,
      },
      { where: { id } },
    );
    const updatedItem = await this.properties.findOne({
      where: { id },
    });
    return updatedItem;
  };

  delete = async id => {
    return this.properties.destroy({
      where: { id },
    });
  };
}

export default ItemService;
