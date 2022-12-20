import React from "react";
import Section from "../component/Section";
import Songs from "../Data/Songs"

export default function Home() {

  return (
    <div className="grid gap-y-8">
      <Section title="En Son Oynatılanlar" more="/" items={Songs} />
      <Section title="Denemeniz için önerilenler" more="/" items={Songs} />
      <Section title="Sizin için bulunanlar" more="/" items={Songs} />
    </div>
  );
}
