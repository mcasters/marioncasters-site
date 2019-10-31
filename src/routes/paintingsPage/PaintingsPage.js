import React, { useState } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import s from './PaintingsPage.css';
import ITEM from '../../constants/item';
import useSsrDone from '../../components/Hooks/useSrrDone';
import ItemTab from '../../components/ItemDir/ItemTab';

function PaintingsPage({ title }) {
  useStyles(s);
  const [selectedTab, setSelectedTab] = useState(0);
  const [onClient, setOnClient] = useState(false);
  const ssrDone = useSsrDone();

  if (!onClient && ssrDone) setOnClient(true);

  const year1 = 2017;
  const year2 = 2018;
  const year3 = 2019;
  const type = ITEM.PAINTING.TYPE;

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSelectTab = index => {
    setSelectedTab(index);
    scrollTop();
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
        {onClient ? (
          <>
            <TabPanel>
              {selectedTab === 0 && (
                <ItemTab year={year1} half={0} type={type} />
              )}
            </TabPanel>
            <TabPanel>
              {selectedTab === 1 && (
                <ItemTab year={year2} half={1} type={type} />
              )}
            </TabPanel>
            <TabPanel>
              {selectedTab === 2 && (
                <ItemTab year={year2} half={2} type={type} />
              )}
            </TabPanel>
            <TabPanel>
              {selectedTab === 3 && (
                <ItemTab year={year3} half={0} type={type} />
              )}
            </TabPanel>
          </>
        ) : (
          <>
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
          </>
        )}
      </Tabs>
    </>
  );
}

PaintingsPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PaintingsPage;
