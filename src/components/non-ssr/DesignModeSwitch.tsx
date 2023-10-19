interface DesignModeSwitchProps {
  isExperimentalDesignMode: boolean;
  turnOff: () => void;
  turnOn: () => void;
}
export default function DesignModeSwitch({
  isExperimentalDesignMode,
  turnOn,
  turnOff,
}: DesignModeSwitchProps) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center gap-4 p-4">
      <button className="relative p-4" onClick={() => turnOff()}>
        Base Design
        <span
          className={`absolute inset-0 -z-10 rounded-2xl bg-gray-100 transition duration-300 ${
            isExperimentalDesignMode
              ? "translate-x-1/2 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        ></span>
      </button>
      <button className="relative p-4" onClick={() => turnOn()}>
        Experimental
        <span
          className={`absolute inset-0 -z-10 rounded-2xl bg-gray-100 transition duration-300 ${
            isExperimentalDesignMode
              ? "translate-x-0 opacity-100"
              : "-translate-x-1/2 opacity-0"
          }`}
        ></span>
      </button>
    </div>
  );
}
