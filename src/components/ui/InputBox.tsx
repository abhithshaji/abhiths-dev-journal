interface InputBoxProps {
  className?: string;
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({
  className = "",
  type,
  id,
  name,
  placeholder = "",
  value = "",
  onChange,
}: InputBoxProps) => {
  return (
    <section>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border rounded-lg px-2 py-1 ${className}`}
      />
    </section>
  );
};

export default InputBox;
