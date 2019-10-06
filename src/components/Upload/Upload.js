import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Dropzone from 'react-dropzone';

import UPLOAD_FILE_MUTATION from './uploadFileMutation.graphql';

export default function Upload() {
  const [uploadFile] = useMutation(UPLOAD_FILE_MUTATION);
  return (
    <Dropzone onDrop={([file]) => uploadFile({ variables: { file } })}>
      <p>Try dropping some files here, or click to select files to upload.</p>
    </Dropzone>
  );
}
