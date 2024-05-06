"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

type SubmitBtnProps = {
  initValue: string;
  loadingValue : string;
};
export default function SubmitBtn({ initValue, loadingValue }: SubmitBtnProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className=" w-1/2 sm:w-6/12 dark:bg-white/10 dark:hover:bg-white/15 hover:scale-105 transition-all shadow-xl"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingValue}
        </>
      ) : (
        initValue
      )}
    </Button>
  );
}
