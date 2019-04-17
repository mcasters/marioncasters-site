import React from 'react';
import { Mutation } from 'react-apollo';
import Dropzone from 'react-dropzone';

import UPLOAD_FILE_MUTATION from './uploadFileMutation.graphql';

export default () => (
  <Mutation mutation={UPLOAD_FILE_MUTATION}>
    {mutate => (
      <Dropzone onDrop={([file]) => mutate({ variables: { file } })}>
        <p>Try dropping some files here, or click to select files to upload.</p>
      </Dropzone>
    )}
  </Mutation>
);
