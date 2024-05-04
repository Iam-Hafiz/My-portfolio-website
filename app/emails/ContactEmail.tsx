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
        {" "}
        <title>{subject}</title>
      </Head>
      <Preview>New customer from my portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-200 text-black">
          <Container>
            <Section className=" bg-slate-100 p-4 rounded-md max-w-xl">
              <Text>{message}</Text>
              <Hr />
              <Text>{fullName}</Text>
              <Text className=" text-blue-700">{email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
