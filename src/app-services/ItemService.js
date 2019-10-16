import ITEM_CONST from '../constants/itemConstants';

class ItemService {
  constructor(type) {
    this.constDatas = {};
    this.isSculpture = false;
    this.init(type);
  }

  init(type) {
    if (type === ITEM_CONST.PAINTING.TYPE) {
      this.constDatas = ITEM_CONST.PAINTING;
    } else if (type === ITEM_CONST.DRAWING.TYPE) {
      this.constDatas = ITEM_CONST.DRAWING;
    } else if (type === ITEM_CONST.SCULPTURE.TYPE) {
      this.constDatas = ITEM_CONST.SCULPTURE;
      this.isSculpture = true;
    } else throw new Error(`Type ${type} inexistant`);
  }

  get(name) {
    if (!this.has(name)) {
      throw new Error(`Property ${name} not found`);
    }
    return this.model[name];
  }

  has(name) {
    return name in this.model;
  }

  getPath = () => {
    return this.constDatas.PATH;
  };

  getFolder = () => {
    return this.constDatas.FOLDER;
  };

  getTitle = () => {
    return this.constDatas.TITLE;
  };

  getAltImage = () => {
    return this.constDatas.ALT_IMAGE;
  };

  getIsSculpture = () => {
    return this.isSculpture;
  };
}

export default ItemService;
