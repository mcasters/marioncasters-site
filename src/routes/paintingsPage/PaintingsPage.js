/* eslint-disable react/forbid-prop-types */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

import s from './PaintingsPage.css';
import SelectItem from '../../components/SelectItem/SelectItem';

class PaintingsPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imagesList: PropTypes.object.isRequired,
  };

  render() {
    const year1 = 2017;
    const year2 = 2018;
    const year3 = 2019;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Tabs className={s.tabs}>
          <TabList>
            <Tab>{year1}</Tab>
            <Tab>{year2}</Tab>
            <Tab>{year3}</Tab>
          </TabList>
          <TabPanel>
            <SelectItem year={year1} imagesList={this.props.imagesList} />
          </TabPanel>
          <TabPanel>
            <SelectItem year={year2} imagesList={this.props.imagesList} />
          </TabPanel>
          <TabPanel>
            <SelectItem year={year3} imagesList={this.props.imagesList} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(s)(PaintingsPage);
