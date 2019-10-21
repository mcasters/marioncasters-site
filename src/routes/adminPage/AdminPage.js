import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useApolloClient } from '@apollo/react-hooks';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './AdminPage.css';
import ITEM from '../../constants/item';
import TITLE from '../../constants/pageTitle';
import CONTENT from '../../constants/content';
import EditContent from '../../components/Admin/EditContent';
import Logout from '../../components/Logout';
import AdminItemParent from '../../components/Admin/Item/AdminItemParent';
import EditPictureForm from '../../components/Admin/EditPicture/EditPictureForm';
import GET_ADMIN_STATUS_QUERY from '../../data/graphql/queries/getAdminStatusQuery.graphql';

function AdminPage({ title }) {
  useStyles(s);
  const client = useApolloClient();
  const { adminStatus } = client.readQuery({
    query: GET_ADMIN_STATUS_QUERY,
  });

  if (!adminStatus.isConnected) {
    return { redirect: '/home' };
  }

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
          <Tab>{TITLE.HOME}</Tab>
          <Tab>{TITLE.PRESENTATION}</Tab>
          <Tab>{ITEM.PAINTING.TITLE}</Tab>
          <Tab>{ITEM.SCULPTURE.TITLE}</Tab>
          <Tab>{ITEM.DRAWING.TITLE}</Tab>
          <Tab>{TITLE.CONTACT}</Tab>
        </TabList>
        <TabPanel>
          <div className={s.tabContainer}>
            <EditPictureForm pictureTitle={CONTENT.HOME_IMAGE_PORTRAIT} />
            <EditPictureForm pictureTitle={CONTENT.HOME_IMAGE_LANDSCAPE} />
            <EditContent keyContent={CONTENT.KEY.HOME1} isTextArea />
            <EditContent keyContent={CONTENT.KEY.HOME2} isTextArea />
            <EditContent keyContent={CONTENT.KEY.HOME3} isTextArea />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.tabContainer}>
            <EditPictureForm pictureTitle={CONTENT.PRESENTATION_IMAGE_TITLE} />
            <EditContent keyContent={CONTENT.KEY.PRESENTATION} isTextArea />
          </div>
        </TabPanel>
        <TabPanel>
          <AdminItemParent type={ITEM.PAINTING.TYPE} />
        </TabPanel>
        <TabPanel>
          <AdminItemParent type={ITEM.SCULPTURE.TYPE} />
        </TabPanel>
        <TabPanel>
          <AdminItemParent type={ITEM.DRAWING.TYPE} />
        </TabPanel>
        <TabPanel>
          <div className={s.tabContainer}>
            <EditContent keyContent={CONTENT.KEY.CONTACT_ADDRESS} isTextArea />
            <EditContent
              keyContent={CONTENT.KEY.CONTACT_PHONE}
              isTextArea={false}
            />
            <EditContent
              keyContent={CONTENT.KEY.CONTACT_EMAIL}
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

export default AdminPage;
