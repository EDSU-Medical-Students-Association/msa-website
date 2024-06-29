import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

interface FormButtonProps {
  text: [string, string];
}

export const FormButton = ({ text }: FormButtonProps) => {
  const [action, setAction] = useState<(typeof text)[number]>(text[0]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setAction(text[1]);
    setLoading(true);
  };

  return (
    <Button
      className="my-6"
      type="submit"
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
      {action}
    </Button>
  );
};
