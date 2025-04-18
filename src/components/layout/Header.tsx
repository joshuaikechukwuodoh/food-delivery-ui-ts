import { Button } from "../common/Button";

export default function Header() {
  const handleAuth = () => {
    console.log("Auth button clicked");
  };
  return (
    <>
      <div className="flex text-charcoalSlate  flex-row justify-between align-middle rounded-md bg-lightMist px-7 py-5 w-full">
        <h1 className="font-black ">FF</h1>
        <ul className="flex align-middle gap-3 justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Ts</li>
        </ul>
        <Button
          className="bg-chiliSpice text-creamyWhite px-3 py-2 rounded-md "
          onClick={handleAuth}
        >
          Log in
        </Button>
        <Button className="btn-base">Register</Button>
      </div>
    </>
  );
}
