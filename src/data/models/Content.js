import DataType from 'sequelize';
import Model from '../sequelize';

const Content = Model.define('Content', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
    get() {
      return this.getDataValue('id');
    },
  },

  label: {
    type: DataType.STRING(50),
    allowNull: false,
    get() {
      return this.getDataValue('label');
    },
    set(value) {
      this.setDataValue('label', value);
    },
  },

  text: {
    type: DataType.TEXT,
    allowNull: false,
    get() {
      return this.getDataValue('text');
    },
    set(value) {
      this.setDataValue('text', value);
    },
  },
});

export default Content;

Content.sync({ force: true });
