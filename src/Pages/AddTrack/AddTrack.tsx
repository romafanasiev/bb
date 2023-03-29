import { FileFormField, Form, TextFormField } from 'Components';
import { formFieldNames } from 'Constants';

const { cover, title, bpm, tags, price, preview, fullVersion, discount } =
  formFieldNames;

export const AddTrack = () => (
  <Form>
    <FileFormField name={cover} label="Add track cover" />
    <FileFormField name={preview} label="Add track preview" />
    <FileFormField name={fullVersion} label="Add track full version" />
    <TextFormField name={title} label="Track title" />
    <TextFormField name={bpm} label="Bpm" />
    <TextFormField name={tags} label="Tags" />
    <TextFormField name={price} label="Price" />
    <TextFormField name={discount} label="Discount" />
  </Form>
);
