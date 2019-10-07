import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

import s from './AdminPage.css';
import ITEM_CONST from '../../constants/itemConstants';
import CONT_CONST from '../../constants/contentConstants';
import EditContent from '../../components/Admin/EditContent';
import Logout from '../../components/Logout';
import AdminItemParent from '../../components/Admin/Item/AdminItemParent';
import EditPictureForm from '../../components/Admin/EditPicture/EditPictureForm';

function AdminPage({ title }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectTab = index => {
    setSelectedTab(index);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <Logout />
      <Tabs
        selectedIndex={selectedTab}
        onSelect={handleSelectTab}
        className={s.tabs}
        forceRenderTabPanel
      >
        <TabList>
          <Tab>{CONT_CONST.TITLE.HOME}</Tab>
          <Tab>{CONT_CONST.TITLE.PRESENTATION}</Tab>
          <Tab>{ITEM_CONST.TITLE.PAINTING}</Tab>
          <Tab>{ITEM_CONST.TITLE.SCULPTURE}</Tab>
          <Tab>{ITEM_CONST.TITLE.DRAWING}</Tab>
          <Tab>{CONT_CONST.TITLE.CONTACT}</Tab>
        </TabList>
        <TabPanel>
          <div className={s.tabContainer}>
            <EditPictureForm pictureTitle={CONT_CONST.HOME_IMAGE_PORTRAIT} />
            <EditPictureForm pictureTitle={CONT_CONST.HOME_IMAGE_LANDSCAPE} />
            <EditContent keyContent={CONT_CONST.KEY.HOME1} isTextArea />
            <EditContent keyContent={CONT_CONST.KEY.HOME2} isTextArea />
            <EditContent keyContent={CONT_CONST.KEY.HOME3} isTextArea />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.tabContainer}>
            <EditPictureForm
              pictureTitle={CONT_CONST.PRESENTATION_IMAGE_TITLE}
            />
            <EditContent keyContent={CONT_CONST.KEY.PRESENTATION} isTextArea />
          </div>
        </TabPanel>
        <TabPanel>
          <AdminItemParent type={ITEM_CONST.TYPE.PAINTING} />
        </TabPanel>
        <TabPanel>
          <AdminItemParent type={ITEM_CONST.TYPE.SCULPTURE} />
        </TabPanel>
        <TabPanel>
          <AdminItemParent type={ITEM_CONST.TYPE.DRAWING} />
        </TabPanel>
        <TabPanel>
          <div className={s.tabContainer}>
            <EditContent
              keyContent={CONT_CONST.KEY.CONTACT_ADDRESS}
              isTextArea
            />
            <EditContent
              keyContent={CONT_CONST.KEY.CONTACT_PHONE}
              isTextArea={false}
            />
            <EditContent
              keyContent={CONT_CONST.KEY.CONTACT_EMAIL}
              isTextArea={false}
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

AdminPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(AdminPage);
