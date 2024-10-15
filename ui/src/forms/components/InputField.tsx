import { useField } from 'formik';

const InputField = (props) => {
  const { label, ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <div>
        <label
            htmlFor={props.id}
            className="block text-sm font-medium leading-6 text-gray-900"
            >
            {label}
        </label>
        <div className="mt-2">
            <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ff9900] sm:text-sm sm:leading-6"
                {...field}
                {...rest}
            />
            {meta.error && meta.touched && <div className='text-red-600 text-sm'>{meta.error}</div>}
        </div>
    </div>
  );
}

export default InputField