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
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";
import { EMAIL_ADDRESS } from "@/server/email/constants";
import { Mail } from "lucide-react";

export interface MassEmailProps {
  preview: string;
  title: string;
  body: string[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://rutmiandakash.com";

export const MassEmail = ({ preview, title, body }: MassEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={4568}
                src={`${baseUrl}/home/landing.jpeg`}
                alt="Rutmi & Akash"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading style={{ ...heading, textAlign: "center" }}>
                  {title}
                </Heading>
                {body.map((b) => (
                  <Text style={paragraph} key={b}>
                    {b}
                  </Text>
                ))}
              </Column>
            </Row>
            <Row
              style={{
                padding: "20px",
                paddingBottom: 10,
              }}
            >
              <Column
                style={{
                  borderTop: "1px solid rgb(0,0,0, 0.1)",
                  paddingTop: 10,
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontStyle: "italic",
                    letterSpacing: 1,
                  }}
                >
                  <Link
                    href={`mailto:${EMAIL_ADDRESS}`}
                    style={{
                      ...fontSerif,
                      fontSize: 14,
                      textAlign: "center",
                      color: "#aebe94",
                    }}
                  >
                    {EMAIL_ADDRESS}
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

MassEmail.PreviewProps = {
  body: [
    "Amet fugiat sint officia mollit esse laboris pariatur ipsum reprehenderit enim consectetur officia. Magna proident do Lorem aliqua sunt ad ipsum proident do eiusmod. Tempor eu exercitation veniam irure ipsum voluptate. Non quis esse ad et duis dolore labore aliquip pariatur ut laborum irure. Sint culpa et amet amet minim ea. Ipsum Lorem aliqua minim voluptate non mollit ad veniam eiusmod minim irure cupidatat.",
    "Sit aliquip ad tempor aliquip qui nisi anim esse cupidatat fugiat velit duis exercitation nostrud. Adipisicing anim ad elit reprehenderit voluptate culpa nisi commodo proident aliqua. Pariatur ullamco ullamco cillum ad fugiat velit. Sit in laborum ullamco proident incididunt mollit cupidatat. Exercitation voluptate enim qui laboris proident aliquip veniam. Velit est nisi nostrud id culpa nostrud anim aliqua fugiat et quis nisi consequat laborum.",
  ],
  title: "Rutmi & Akash",
  preview: "Rutmi & Akash",
} as MassEmailProps;

export default MassEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const heading = {
  fontFamily:
    '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif',
  fontWeight: 400,
  letterSpacing: 2,
  fontSize: 40,
};

const paragraph = {
  fontSize: 16,
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  width: "100%",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
  paddingBottom: 10,
};

const emailLink = {
  fontFamily:
    '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif',

  lineHeight: "10px",
};

const fontSerif = {
  fontFamily:
    '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif',
};
