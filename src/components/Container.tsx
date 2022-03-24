type Props = {
  children: React.ReactNode;
  title?: string;
};

const Container: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="relative overflow-hidden flex flex-col py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
};

export default Container;
