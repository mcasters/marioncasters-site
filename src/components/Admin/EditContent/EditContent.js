import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from '@apollo/react-hooks';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './ContentForm.css';
import GET_CONTENT from '../../../data/graphql/queries/getContent.graphql';
import ContentForm from './ContentForm';
import ADD_CONTENT_MUTATION from '../../../data/graphql/queries/addContentMutation.graphql';
import AlertContext from '../../AlertContext';

function EditContent({ keyContent, isTextArea }) {
  useStyles(s);
  const triggerAlert = useContext(AlertContext);
  const { data } = useQuery(GET_CONTENT, {
    variables: { key: keyContent },
    ssr: true,
  });

  const [addContent] = useMutation(ADD_CONTENT_MUTATION, {
    onError(err) {
      triggerAlert(err.message, true);
    },
    onCompleted() {
      triggerAlert('Enregistré', false);
    },
  });

  return (
    <>
      {data && data.getContent && (
        <ContentForm
          keyContent={keyContent}
          isTextArea={isTextArea}
          initialContent={data.getContent.text}
          mutation={addContent}
        />
      )}
    </>
  );
}

EditContent.propTypes = {
  keyContent: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool.isRequired,
};

export default EditContent;
