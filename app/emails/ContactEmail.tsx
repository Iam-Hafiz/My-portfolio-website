import React from "react";
import {
  Html,
  Body,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { capitalizeFirstLetter } from "@/lib/utils";

type ContactEmailProps = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactEmail({
  fullName,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head>
      </Head>
      <Preview>New customer from my portfolio site</Preview>
      <Tailwind>
        <Head>
          {" "}
          <title>{capitalizeFirstLetter(subject)}</title>
        </Head>
        <Body className="bg-gray-100 dark:bg-indigo-900 dark:text-slate-200 text-black p-2">
          <Container>
            <Section className=" bg-white dark:bg-indigo-800 p-1 max-w-screen-2xl">
              <Text>{capitalizeFirstLetter(message)}</Text>
              <Hr />
              <Text>{capitalizeFirstLetter(fullName)}</Text>
              <Text className=" text-blue-800">{email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
