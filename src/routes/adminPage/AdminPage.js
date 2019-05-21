import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

import s from './AdminPage.css';
import itemConstants from '../../constants/itemConstants';
import contentConstants from '../../constants/contentConstants';
import EditContent from '../../components/Admin/EditContent';
import Logout from '../../components/Logout';
import AdminItemParent from '../../components/Admin/Item/AdminItemParent';
import EditPicture from '../../components/Admin/EditPicture';

class AdminPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
    };

    this.handleSelectTab = this.handleSelectTab.bind(this);
  }

  handleSelectTab = index => {
    this.setState({ selectedTab: index });
  };

  render() {
    const CONT_CONST = contentConstants;
    const ITEM_CONST = itemConstants;
    const { title } = this.props;
    return (
      <div className={s.container}>
        <h1 className={s.title}>{title}</h1>
        <Logout />
        <Tabs
          selectedIndex={this.state.selectedTab}
          onSelect={this.handleSelectTab}
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
            <EditPicture pictureTitle={CONT_CONST.HOME_IMAGE_TITLE_1} />
            <EditPicture pictureTitle={CONT_CONST.HOME_IMAGE_TITLE_2} />
            <EditPicture pictureTitle={CONT_CONST.HOME_IMAGE_TITLE_3} />
            <EditContent keyContent={CONT_CONST.KEY.HOME1} isTextArea />
            <EditContent keyContent={CONT_CONST.KEY.HOME2} isTextArea />
            <EditContent keyContent={CONT_CONST.KEY.HOME3} isTextArea />
          </TabPanel>
          <TabPanel>
            <EditPicture pictureTitle={CONT_CONST.PRESENTATION_IMAGE_TITLE} />
            <EditContent keyContent={CONT_CONST.KEY.PRESENTATION} isTextArea />
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
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(s)(AdminPage);
