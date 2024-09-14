const ChangePageButton = ({
  pageName,
  active,
}: {
  pageName: string;
  active: boolean;
}) => {
  return (
    <div className="p-1 m-1">
      <button className="normal-text text-white">{pageName}</button>
      {active ? <hr></hr> : null}
    </div>
  );
};

export default ChangePageButton;
