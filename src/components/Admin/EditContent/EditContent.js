import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'react-apollo';

import Alert from '../../Alert';
import s from './ContentForm.css';
import GET_CONTENT from '../../../data/graphql/queries/getContent.graphql';
import ContentForm from './ContentForm';

function EditContent(props) {
  const { error, data } = useQuery(GET_CONTENT, {
    variables: { key: props.keyContent },
    ssr: true,
  });

  if (error) return <Alert message="Erreur au chargement du contenu" isError />;

  return (
    <>
      {data && data.getContent && (
        <ContentForm
          keyContent={props.keyContent}
          isTextArea={props.isTextArea}
          initialContent={data.getContent.text}
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
