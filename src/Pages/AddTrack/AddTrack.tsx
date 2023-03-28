import { FormField, Form } from 'Components';
import { formFieldNames, globalStyles } from 'Constants';

const { cover, title, bpm, tags, price, preview, fullVersion, discount } =
  formFieldNames;

export const AddTrack = () => (
  <Form sx={{ maxWidth: globalStyles.elementMaxWidth }}>
    <FormField name={cover} type="file" label="Track cover" />
    <FormField name={preview} type="file" label="Track preview" />
    <FormField name={fullVersion} type="file" label="Track full version" />
    <FormField name={title} label="Track title" color="secondary" />
    <FormField name={bpm} label="Bpm" color="primary" />
    <FormField name={tags} label="Tags" color="secondary" />
    <FormField name={price} label="Price" color="secondary" />
    <FormField name={discount} label="Discount" color="secondary" />
  </Form>
);
