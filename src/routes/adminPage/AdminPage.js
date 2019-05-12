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

class AdminPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      allPaintingImages: this.importAllImages(
        require.context(
          './../../../../../photo-files/paintings',
          false,
          /\.jpe?g$/,
        ),
      ),
      allDrawingImages: this.importAllImages(
        require.context(
          './../../../../../photo-files/drawings',
          false,
          /\.jpe?g$/,
        ),
      ),
      allSculptureImages: this.importAllImages(
        require.context(
          './../../../../../photo-files/sculptures',
          false,
          /\.jpe?g$/,
        ),
      ),
      selectedTab: 0,
    };

    this.handleSelectTab = this.handleSelectTab.bind(this);
  }

  importAllImages = r => {
    const images = new Map();
    r.keys().forEach(item => {
      images.set(item.replace('./', ''), r(item));
    });
    return images;
  };

  handleSelectTab = index => {
    this.setState({ selectedTab: index });
  };

  render() {
    const CONTENT_CONSTANTS = contentConstants;
    const ITEM_CONSTANTS = itemConstants;
    const { title } = this.props;
    return (
      <div className={s.container}>
        <h1>{title}</h1>
        <Logout />
        <Tabs
          selectedIndex={this.state.selectedTab}
          onSelect={this.handleSelectTab}
          className={s.tabs}
          forceRenderTabPanel
        >
          <TabList>
            <Tab>{CONTENT_CONSTANTS.TITLE.HOME}</Tab>
            <Tab>{CONTENT_CONSTANTS.TITLE.PRESENTATION}</Tab>
            <Tab>{ITEM_CONSTANTS.TITLE.PAINTING}</Tab>
            <Tab>{ITEM_CONSTANTS.TITLE.SCULPTURE}</Tab>
            <Tab>{ITEM_CONSTANTS.TITLE.DRAWING}</Tab>
            <Tab>{CONTENT_CONSTANTS.TITLE.CONTACT}</Tab>
          </TabList>
          <TabPanel>
            <EditContent keyContent={CONTENT_CONSTANTS.KEY.HOME1} isTextArea />
            <EditContent keyContent={CONTENT_CONSTANTS.KEY.HOME2} isTextArea />
            <EditContent keyContent={CONTENT_CONSTANTS.KEY.HOME3} isTextArea />
          </TabPanel>
          <TabPanel>
            <EditContent
              keyContent={CONTENT_CONSTANTS.KEY.PRESENTATION_TEXT}
              isTextArea
            />
          </TabPanel>
          <TabPanel>
            <AdminItemParent
              type={ITEM_CONSTANTS.TYPE.PAINTING}
              allImages={this.state.allPaintingImages}
            />
          </TabPanel>
          <TabPanel>
            <AdminItemParent
              type={ITEM_CONSTANTS.TYPE.SCULPTURE}
              allImages={this.state.allSculptureImages}
            />
          </TabPanel>
          <TabPanel>
            <AdminItemParent
              type={ITEM_CONSTANTS.TYPE.DRAWING}
              allImages={this.state.allDrawingImages}
            />
          </TabPanel>
          <TabPanel>
            <EditContent
              keyContent={CONTENT_CONSTANTS.KEY.CONTACT_ADDRESS}
              isTextArea
            />
            <EditContent
              keyContent={CONTENT_CONSTANTS.KEY.CONTACT_PHONE}
              isTextArea={false}
            />
            <EditContent
              keyContent={CONTENT_CONSTANTS.KEY.CONTACT_EMAIL}
              isTextArea={false}
            />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(s)(AdminPage);
