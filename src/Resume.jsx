import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 text-base">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Lucius Sabine Lange Díaz</h1>
        <p className="text-muted-foreground">Multidisciplinary Artist & Freelancer</p>
      </div>

      <Card>
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-2">
            <MapPin className="mt-1" size={18} />
            <span>Tabobá 4075, Apt. 5, Montevideo, Uruguay</span>
          </div>
          <div className="flex items-start space-x-2">
            <Phone className="mt-1" size={18} />
            <span>+598 09195 4087</span>
          </div>
          <div className="flex items-start space-x-2">
            <Mail className="mt-1" size={18} />
            <span>clangediaz@gmail.com</span>
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p>
          Student and freelancer with 9+ years of experience in customer service,
          social media, and digital art. Adept at creating unique visual identities,
          managing online presence, and designing customized merchandise.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Professional Experience</h2>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold">Freelancer <span className="text-muted-foreground">(2015 – Present)</span></h3>
            <p className="text-sm">Montevideo, Uruguay</p>
            <ul className="list-disc pl-5">
              <li>Social media management & customer support</li>
              <li>Custom logo & character design</li>
              <li>Merchandise creation and promotion</li>
              <li>Basic animation and digital content</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Alorica <span className="text-muted-foreground">(2024)</span></h3>
            <p className="text-sm">Montevideo, Uruguay</p>
            <ul className="list-disc pl-5">
              <li>Invoice-related customer service</li>
              <li>Handled support calls professionally</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <ul className="list-disc pl-5">
          <li>Visual Communication, Digital & Electronic Art – UDELAR (Present)</li>
          <li>Third Year of Piano – Conservatory Vicente Pablo (2019)</li>
          <li>Children & Youth Workshop – La Experimental Theater (2015)</li>
          <li>First Semester of Singing – National Conservatory (2008)</li>
          <li>Children's Arts Workshop – Artecentro Paiz, Guatemala (2011)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Courses & Certifications</h2>
        <ul className="list-disc pl-5">
          <li>Social Media Strategy – Intecap (2024)</li>
          <li>Professional Makeup – Edutin (Ongoing)</li>
          <li>Self Makeup – Gavidia Models (2024)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <p>
          Customer service, visual design, illustration, animation, digital marketing,
          merchandise design, creative direction.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">References</h2>
        <ul className="list-disc pl-5">
          <li>Mónica Díaz – Systems Analyst (+598 9696 3802)</li>
          <li>Susana Millán – English Language Specialist (+598 9403 3945)</li>
        </ul>
      </section>

      <div className="text-center">
        <a href="/Lucius_Lange_Resume_EN.pdf" download>
          <Button variant="outline">Download Resume</Button>
        </a>
      </div>
    </div>
  );
}
