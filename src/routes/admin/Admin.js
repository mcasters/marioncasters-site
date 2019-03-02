import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

import s from './Admin.css';
import AddItem from '../../components/AddItem';
import ITEM_CONSTANTS from '../../constants/itemConstants';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <Tabs className={s.tabs}>
            <TabList>
              <Tab>{ITEM_CONSTANTS.TITLE.PAINTING}</Tab>
              <Tab>{ITEM_CONSTANTS.TITLE.SCULPTURE}</Tab>
              <Tab>{ITEM_CONSTANTS.TITLE.DRAWING}</Tab>
            </TabList>
            <TabPanel>
              <AddItem type={ITEM_CONSTANTS.TYPE.PAINTING} />
            </TabPanel>
            <TabPanel>
              <AddItem type={ITEM_CONSTANTS.TYPE.SCULPTURE} />
            </TabPanel>
            <TabPanel>
              <AddItem type={ITEM_CONSTANTS.TYPE.DRAWING} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
