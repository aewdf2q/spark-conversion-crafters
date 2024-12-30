import { PopupButton } from "react-calendly";

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
  showHeading?: boolean;
}

export const CalendlyButton = ({ className, children, showHeading = false }: CalendlyButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {showHeading && (
        <h2 className="text-3xl font-bold text-pink-500">
          Schedule Your Free Strategy Call:
        </h2>
      )}
      <PopupButton
        url="https://calendly.com/arturssemenako/30min"
        rootElement={document.getElementById("root")!}
        text={children?.toString() || "Schedule Your Strategy Call"}
        className={`${className} animate-float`}
        styles={{
          height: "100%",
          width: "100%",
          color: "#FFFFFF",
        }}
      />
    </div>
  );
};