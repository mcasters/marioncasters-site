import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation, useQuery } from 'react-apollo';

import s from './ContentForm.css';
import GET_CONTENT from '../../../data/graphql/queries/getContent.graphql';
import ContentForm from './ContentForm';
import ADD_CONTENT_MUTATION from '../../../data/graphql/queries/addContentMutation.graphql';

function EditContent({ keyContent, isTextArea }) {
  const { data } = useQuery(GET_CONTENT, {
    variables: { key: keyContent },
    ssr: true,
  });

  const [addContent] = useMutation(ADD_CONTENT_MUTATION);

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

export default withStyles(s)(EditContent);
