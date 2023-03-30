import { FileFormField, Form, TextFormField } from 'Components';
import { formFieldNames } from 'Constants';
import { uploadTrackValidation } from 'Utils/validation';

import type { TUploadTrackForm } from 'Types';

const { cover, title, bpm, tags, price, preview, fullVersion } = formFieldNames;

export const AddTrack = () => {
  const onSubmit = (data: TUploadTrackForm) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Form
      buttonColor="primary"
      onSubmit={onSubmit}
      validation={uploadTrackValidation}
    >
      <FileFormField name={cover} label="Add track cover" />
      <FileFormField name={preview} label="Add track preview" />
      <FileFormField name={fullVersion} label="Add track full version" />
      <TextFormField name={title} label="Track title" />
      <TextFormField name={bpm} label="Bpm" />
      <TextFormField name={tags} label="Tags" />
      <TextFormField name={price} label="Price" />
    </Form>
  );
};
