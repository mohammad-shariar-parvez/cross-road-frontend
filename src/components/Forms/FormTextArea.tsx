import { Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  richText?: boolean;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
  maxLength,
  richText = false,
}: TextAreaProps) => {
  const { control } = useFormContext();
  var quill = new Quill('#editor', {
    modules: {
      toolbar: false,
    },
  });
  // const modules = {
  //   toolbar: richText ? true : false,
  // };
  return (
    <div className={`flex flex-col  w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) =>
          richText ? (
            <ReactQuill
              theme='snow'
              value={value}
              onChange={onChange}
              className='bg-white rounded-xl '
            />
          ) : (
            <Input.TextArea
              rows={rows}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              defaultValue={value}
              maxLength={maxLength}
            />
          )
        }
      />
    </div>
  );
};

export default FormTextArea;
