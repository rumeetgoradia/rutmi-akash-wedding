import { EMAIL_ADDRESS } from "@/server/email/constants";
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Markdown } from "@react-email/markdown";

export interface MassEmailProps {
  preview: string;
  title: string;
  body: string;
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
                height={2740}
                src={`${baseUrl}/home/landing.jpeg`}
                alt="Rutmi & Akash"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading style={{ ...heading, textAlign: "center" }}>
                  {title}
                </Heading>
                <Markdown
                  markdownCustomStyles={{ p: paragraph, li: paragraph }}
                >
                  {body}
                </Markdown>

                {/* {body.map((b) => (
                  <Text style={paragraph} key={b}>
                    {b}
                  </Text>
                ))} */}
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
  body: "Anim ad quis laboris proident labore in.",
  title: "Rutmi & Akash",
  preview: "Rutmi & Akash",
} as MassEmailProps;

export default MassEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const fontSerif = {
  fontFamily:
    '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif',
};

const heading = {
  ...fontSerif,
  fontWeight: 400,
  letterSpacing: 2,
  fontSize: 36,
};

const paragraph = {
  fontSize: 16,
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
  height: "auto",
};

const boxInfos = {
  padding: "20px",
  paddingBottom: 10,
};
