

type InputProps = {
    placeholder: string;
    id: string;
    type: string;
    name: string;
    onChangeFun: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    classname?: string;
}

const Input = ({placeholder , id , type , name , onChangeFun , value , classname} : InputProps) => {
  return (
    <input
    placeholder={placeholder}
    id={id}
    type={type}
    name={name}
    onChange={onChangeFun}
    value={value}
    className={
        classname
          ? classname
          : "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      }

    />
    
    
  )
}

export default Input