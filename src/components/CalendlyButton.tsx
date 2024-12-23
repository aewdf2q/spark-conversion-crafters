import { PopupButton } from "react-calendly";

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const CalendlyButton = ({ className, children }: CalendlyButtonProps) => {
  return (
    <PopupButton
      url="https://calendly.com/arturssemenako/30min"
      rootElement={document.getElementById("root")!}
      text={children?.toString() || "Schedule Your Strategy Call"}
      className={className}
    />
  );
};