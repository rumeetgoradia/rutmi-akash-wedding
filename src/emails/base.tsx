import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Font,
  Link,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import { EMAIL_ADDRESS } from "@/server/email/constants";
import { Mail } from "lucide-react";

export type BaseEmailProps = {
  preview: string;
  heading: string;
  body: string[];
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT ?? 3001}`;

export const BaseEmail = ({ body, heading, preview }: BaseEmailProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>{preview}</Preview>
        <Body className=" bg-[#f6f9fc] p-2">
          <Container className="flex flex-col border border-[#f0f0f0] bg-white align-top">
            <Section className="h-full w-full md:px-8 md:pt-8">
              <Img
                src={`${baseUrl}/home/landing.jpeg`}
                width="4568"
                className="max-w-full"
                alt="Rutmi & Akash"
              />
            </Section>
            <Section className="p-4 md:px-8">
              <Heading className="font-serif text-4xl font-medium">
                {heading}
              </Heading>
              {body.map((b) => (
                <Text style={text} key={b}>
                  {b}
                </Text>
              ))}
              <div className="border-1 mt-8 w-full border-solid border-transparent border-t-slate-200 pt-4">
                <Link
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="mx-auto flex max-w-[232px] items-center gap-2"
                >
                  <div className="flex items-center justify-center rounded-full bg-[#aebe94] p-2">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <p className="font-serif text-sm text-[#aebe94]">
                    {EMAIL_ADDRESS}
                  </p>
                </Link>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

BaseEmail.PreviewProps = {
  body: [
    "Nostrud qui officia ad anim nisi. Consequat do duis nostrud dolore exercitation. Ad ullamco incididunt veniam non fugiat. Amet cupidatat consectetur sit officia aute anim sint non. Cillum laborum veniam ipsum sunt duis Lorem. Nostrud Lorem ullamco fugiat fugiat consectetur in qui minim mollit deserunt duis consequat. Qui consectetur eu id cillum eiusmod enim enim aliqua quis ea ea.",
    ,
    "Esse ipsum incididunt est pariatur quis nulla ex non aute. Ad cillum qui qui eu exercitation do ullamco dolore eu irure anim fugiat. Eu in minim magna do et consectetur Lorem.",
  ],
  heading: "Rutmi & Akash",
  preview: "Rutmi & Akash Preview",
} as BaseEmailProps;

export default BaseEmail;

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};
