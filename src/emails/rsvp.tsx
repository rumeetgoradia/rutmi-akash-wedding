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
import { EVENTS, Event } from "@/app/schedule/content";
import { Guest } from "@/server/db/schema";
import dateFormat from "dateformat";

export interface RsvpEmailProps {
  event: Event;
  rsvps: EmailRsvps;
}

export type EmailRsvps = { guest: Guest; attending?: boolean }[];

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://rutmiandakash.com";

export const RsvpEmail = ({ event, rsvps }: RsvpEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for RSVPing for the {event.title}!</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={950}
                src={`${baseUrl}/schedule/Landing.png`}
                alt="Rutmi & Akash"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    ...heading,
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 40, letterSpacing: 2 }}>
                    Your RSVP Details
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: 34,
                      fontStyle: "italic",
                    }}
                  >
                    {event.title}
                  </span>
                  <br />
                  <div style={{ paddingTop: 20 }} />
                  <span style={{ fontSize: 28 }}>
                    {dateFormat(event.time, "mmmm d, yyyy · h:MM TT")}
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: 28,
                    }}
                  >
                    <Link
                      style={{ color: "#aebe94" }}
                      href={event.location.start.googleMaps}
                    >
                      {event.location.start.title}
                    </Link>
                  </span>
                </Heading>

                <Text style={paragraph}>
                  Thank you for updating your party's RSVP for the {event.title}
                  . Please see your RSVP details below.
                </Text>

                {rsvps
                  .sort((a, b) => a.guest.displayOrder - b.guest.displayOrder)
                  .map(({ guest, attending }, i) => {
                    return (
                      <Row
                        style={{
                          ...paragraph,
                          padding: "10px 20px",
                          backgroundColor: i % 2 === 0 ? "white" : "whitesmoke",
                        }}
                        key={guest.firstName + guest.lastName}
                      >
                        <Column style={{ fontWeight: 800 }}>
                          {guest.firstName} {guest.lastName}
                        </Column>
                        <Column style={{ textAlign: "right" }}>
                          <em>{!attending ? "Not " : ""} Attending</em>
                        </Column>
                      </Row>
                    );
                  })}

                <Text style={paragraph}>
                  If anything changes, please update your RSVP as soon as
                  possible!
                </Text>
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

RsvpEmail.PreviewProps = {
  event: EVENTS[0],
  rsvps: [
    {
      guest: {
        firstName: "Rumeet",
        lastName: "Goradia",
        displayOrder: 6,
      },
      attending: true,
    },
    {
      guest: {
        firstName: "Rutmi",
        lastName: "Goradia",
        displayOrder: 5,
      },
      attending: true,
    },
    {
      guest: {
        firstName: "Daarsh",
        lastName: "Goradia",
        displayOrder: 3,
      },
      attending: false,
    },
    {
      guest: {
        firstName: "Umesh",
        lastName: "Goradia",
        displayOrder: 4,
      },
      attending: false,
    },
    {
      guest: {
        firstName: "Superduperlongname",
        lastName: "Longname",
        displayOrder: 2,
      },
      attending: true,
    },
    {
      guest: {
        firstName: "Rita",
        lastName: "Goradia",
        displayOrder: 1,
      },
      attending: true,
    },
  ],
} as RsvpEmailProps;

export default RsvpEmail;

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
