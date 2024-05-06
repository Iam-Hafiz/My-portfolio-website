import React from 'react'
import { Checkbox } from './ui/checkbox';

export default function TermsCheckbox() {
  return (
    <div className="items-top flex space-x-2 pl-1">
      <Checkbox
        id="checkbox"
        name="checkbox"
        aria-describedby="checkboxErr"
        value="on"
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="checkbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept{" "}
          <a
            href="https://www.termsfeed.com/live/7cefafb7-3beb-4877-9205-a02e45409e51"
            className=" text-blue-600"
            target="_blank"
          >
            terms & Conditions
          </a>{" "}
          and{" "}
          <a
            href="https://www.termsfeed.com/live/e873ab16-ef0c-4217-8a11-ce87f59d497b"
            className=" text-blue-600"
            target="_blank"
          >
            privacy Policy{" "}
          </a>
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
