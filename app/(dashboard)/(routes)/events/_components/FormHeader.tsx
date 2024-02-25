interface Props {
  query: string;
  category: string;
}

const FormHeader = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <div className="justify-center">
        <h1 className="heading3 self-start text-white-800">
          Search results for &ldquo;{query}&rdquo; in{" "}
          <span className="capitalize">{category}</span>
        </h1>
      </div>
    );
  }

  if (query) {
    return (
      <div className="justify-center">
        <h1 className="heading3 self-start text-white-800">
          Search results for &ldquo;{query}&rdquo;
        </h1>
      </div>
    );
  }
};

export default FormHeader;
