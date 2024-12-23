import { PopupButton } from "react-calendly";

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const CalendlyButton = ({ className, children }: CalendlyButtonProps) => {
  return (
    <PopupButton
      url="https://calendly.com/your-calendly-url" // Replace with your Calendly URL
      rootElement={document.getElementById("root")!}
      text={children || "Schedule Your Strategy Call"}
      className={className}
    />
  );
};