import React from 'react'
import { Checkbox } from './ui/checkbox';

export default function TermsCheckbox() {
  return (
    <div className="items-top flex space-x-2 pl-1">
      <Checkbox id="checkbox" name="checkbox" aria-describedby="checkboxErr" value="on"/>
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="checkbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
