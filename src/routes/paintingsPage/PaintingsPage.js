import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import s from './PaintingsPage.css';
import ItemTab from '../../components/ItemDir/ItemTab';
import ITEM from '../../constants/item';
import WithScrolling from '../../components/WithScrolling';

function PaintingsPage({ title }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const year1 = 2017;
  const year2 = 2018;
  const year3 = 2019;
  const type = ITEM.PAINTING.TYPE;

  const handleSelectTab = index => {
    setSelectedTab(index);
  };

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={handleSelectTab}
        forceRenderTabPanel
      >
        <TabList>
          <Tab>{year1.toString()}</Tab>
          <Tab>{year2.toString()} a</Tab>
          <Tab>{year2.toString()} b</Tab>
          <Tab>{year3.toString()}</Tab>
        </TabList>
        <TabPanel>
          <ItemTab year={year1} half={0} type={type} />
        </TabPanel>
        <TabPanel>
          <ItemTab year={year2} half={1} type={type} />
        </TabPanel>
        <TabPanel>
          <ItemTab year={year2} half={2} type={type} />
        </TabPanel>
        <TabPanel>
          <ItemTab year={year3} half={0} type={type} />
        </TabPanel>
      </Tabs>
    </>
  );
}

PaintingsPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(WithScrolling(PaintingsPage));
