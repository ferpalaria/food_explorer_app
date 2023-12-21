import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <Banner />

      <Section title="Refeições">
        <Card/>
        <Card/>
        <Card/>
      </Section>

      <Section title="Sobremesas">
        <Card/>
        <Card/>
        <Card/>
      </Section>

      <Section title="Bebidas">
        <Card/>
        <Card/>
        <Card/>
      </Section>

    </Container>
  );
}
