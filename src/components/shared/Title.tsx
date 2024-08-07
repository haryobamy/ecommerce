type Props = {
  name: string;
  title: string;
};

function Title({ name, title }: Props) {
  return (
    <div className="flex justify-center my-2">
      <div className="flex w-10/12   text-center ">
        <h1 className="capitalize font-bold">
          {name} <strong className="text-blue-500">{title}</strong>
        </h1>
      </div>
    </div>
  );
}

export default Title;
