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
