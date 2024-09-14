'use client'
import { useRouter } from "next/navigation";

const ChangePageButton = ({
  pageName,
  active,
  url
}: {
  pageName: string;
  active: boolean;
  url:string
}) => {
    const router = useRouter();
  return (
    <div className="p-1 m-1">
      <button className="normal-text text-white" onClick={()=>router.push('/'+url)}>{pageName}</button>
      {active ? <hr></hr> : null}
    </div>
  );
};

export default ChangePageButton;
