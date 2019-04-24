/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

import s from './PaintingsPage.css';
import ItemTab from '../../components/ItemDir/ItemTab';
import ITEM_CONSTANTS from '../../constants/itemConstants';

class PaintingsPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    allImages: PropTypes.object.isRequired,
  };

  render() {
    const year1 = 2017;
    const year2 = 2018;
    const year3 = 2019;
    return (
      <Fragment>
        <h1 className={s.title}>{this.props.title}</h1>
        <div className={s.listContainer}>
          <Tabs>
            <TabList>
              <Tab>{year1.toString()}</Tab>
              <Tab>{year2.toString()}</Tab>
              <Tab>{year3.toString()}</Tab>
            </TabList>
            <TabPanel>
              <ItemTab
                year={year1}
                allImages={this.props.allImages}
                type={ITEM_CONSTANTS.TYPE.PAINTING}
              />
            </TabPanel>
            <TabPanel>
              <ItemTab
                year={year2}
                allImages={this.props.allImages}
                type={ITEM_CONSTANTS.TYPE.PAINTING}
              />
            </TabPanel>
            <TabPanel>
              <ItemTab
                year={year3}
                allImages={this.props.allImages}
                type={ITEM_CONSTANTS.TYPE.PAINTING}
              />
            </TabPanel>
          </Tabs>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(s)(PaintingsPage);
