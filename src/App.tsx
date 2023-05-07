import Button from "./components/atoms/Button/Button";

import { PlayIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const App = () => (
  <>
    <Button
      icon={<PlayIcon className="w-8 h-8" />}
      text="Переглянути"
      background="bg-white"
      color="text-black"
    />
    <Button
      icon={<InformationCircleIcon className="w-8 h-8" />}
      text="Докладніше"
      background="bg-custom-gray"
      color="text-white"
    />
  </>
);

export default App;
